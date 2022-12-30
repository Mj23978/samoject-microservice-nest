import {
  Inject,
  Injectable
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SignupInput } from '@samoject/interface';
import { Supabase } from '@samoject/supabase';
import { AuthApiError, AuthError, Session, User } from '@supabase/supabase-js';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private client: ClientProxy,
    private readonly supabase: Supabase,
  ) { }

  async signup(_data: SignupInput): Promise<{user: User; session: Session; } | AuthApiError | AuthError> {
    const client = this.supabase.getClient();
    const { data, error } = await client.auth.signUp({
      email: _data.email,
      password: _data.password,
    });

    if (error?.name === 'AuthApiError') {
      return error as AuthApiError
    }

    if (error) {
      return error;
    }

    return data;
  }

  async signInWithEmail(email: string, password: string): Promise<AuthApiError | AuthError | { user; session; }> {
    const client = this.supabase.getClient();
    const { data, error } = await client.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error?.name === 'AuthApiError') {
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
