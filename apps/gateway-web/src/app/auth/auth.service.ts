import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  AuthEvent
} from '@samoject/interface';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private userClient: ClientProxy,
  ) { }

  signup(createAuthInput: CreateAuthInput) {
    return this.userClient.send<CreateAuthInput>({ cmd: AuthEvent.CREATE_USER }, {
      username: createAuthInput.username,
      password: createAuthInput.password,
      firstname: createAuthInput.firstname,
      lastname: createAuthInput.lastname,
      email: createAuthInput.email,
      role: createAuthInput.role,
      active: true,
    });
  }

  signInWithEmail() {
    
  }

}
