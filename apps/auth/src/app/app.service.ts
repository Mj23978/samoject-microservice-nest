import {
  Inject,
  Injectable
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Prisma } from '@prisma/client';
import { AuthApiError, AuthError } from '@supabase/supabase-js';
import { Supabase } from '@samoject/supabase';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private client: ClientProxy,
    private readonly supabase: Supabase,
  ) { }

  async signup(email: string, password: string): Promise<AuthApiError | AuthError | { user; session; }> {
    const client = this.supabase.getClient();
    const { data, error } = await client.auth.signUp({
      email: email,
      password: password,
    });

    if (error.name === 'AuthApiError') {
      return error as AuthApiError
    }

    if (error) {
      return error;
    }

    this.client.emit<Prisma.UserCreateInput>('user_created', {});

    return data;
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

}
