import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  Auth,
  AuthEvent, CreateUserInput, LoginInput, User, UserEvent
} from '@samoject/interface';
import { Session } from '@supabase/supabase-js';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    // @Inject('AUTH_SERVICE') private authClient: ClientProxy,
    @Inject('AUTH_SERVICE') private userClient: ClientProxy,
  ) { }

  async signup(data: CreateUserInput): Promise<User> {
    const userCreateObs = this.userClient.send<User | { error: any }>({ cmd: UserEvent.CREATE_USER }, {
      ...data,
      active: true,
    });
    const userCreateRes = await firstValueFrom(userCreateObs);
    if (userCreateRes.hasOwnProperty('error')) {
      throw userCreateRes;
    }

    const signupResObs = this.userClient.send<Auth>({ cmd: AuthEvent.SIGN_UP }, {
      ...data,
      headers: {}
    });
    try {
      const signupRes = await firstValueFrom(signupResObs);
      if (signupRes.hasOwnProperty('error')) {
        this.userClient.send<CreateUserInput>({ cmd: UserEvent.REMOVE_USER }, {
          id: (userCreateRes as User).id,
          active: true,
        });
        throw signupRes;
      }
      return userCreateRes as User;
    } catch (err) {
      const userRemoveObs = this.userClient.send({ cmd: UserEvent.REMOVE_USER }, {
        id: (userCreateRes as User).id,
        active: true,
      });
      await firstValueFrom(userRemoveObs);
      throw err;
    }
  }

  async signInWithEmail(data: LoginInput): Promise<Auth> {
    const loginObs = this.userClient.send<{ user: any; session: Session }>({ cmd: AuthEvent.SIGN_IN_WITH_EMAIL }, {
      username: data.username,
      password: data.password,
      email: data.email,
    });
    const loginRes = await firstValueFrom(loginObs);
    if (loginRes.hasOwnProperty('message')) {
      throw loginRes;
    }
    const res = new Auth();
    res.accessToken = loginRes.session.access_token;
    res.refreshToken = loginRes.session.refresh_token;
    res.tokenType = loginRes.session.token_type;
    res.aud = loginRes.session.user.aud;
    res.expiresAt = loginRes.session.expires_at;
    return res
  }

}

