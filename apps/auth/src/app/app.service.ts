import {
  Inject,
  Injectable
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserInput } from '@samoject/interface';
import { Supabase } from '@samoject/supabase';
import { AuthApiError, AuthError } from '@supabase/supabase-js';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('MATH_SERVICE') private client: ClientProxy,
    private readonly supabase: Supabase,
  ) { }

  async signup(email: string, password: string, username: string, firstName: string, lastName: string): Promise<Observable<CreateUserInput> | AuthApiError | AuthError> {
    const client = this.supabase.getClient();
    const { data, error } = await client.auth.signUp({
      email: email,
      password: password,
    });

    if (error?.name === 'AuthApiError') {
      return error as AuthApiError
    }

    if (error) {
      return error;
    }

    return this.client.send<CreateUserInput>({ cmd: 'user.createUser' }, {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      active: true,
      role: 'USER',
    });
  }

  async signInWithEmail(email: string, password: string): Promise<AuthApiError | AuthError | { user; session; }> {
    const client = this.supabase.getClient();
    const { data, error } = await client.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error.name === 'AuthApiError') {
      return error as AuthApiError
    }

    if (error) {
      return error;
    }

    return data;
  }

  sum(data: number[]): Observable<number> {
    return this.client.send<number>({ cmd: 'sum' }, data);
  }

}
