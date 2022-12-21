import {
  Args, Mutation, Parent,
  ResolveField, Resolver
} from '@nestjs/graphql';
import { Auth, User, Token } from '@samoject/interface';
import { AppService } from './app.service';
import { LoginInput } from '../dto/login.input';
import { RefreshTokenInput, SignupInput } from '../dto';

@Resolver(() => Auth)
export class AppResolver {
  constructor(private readonly app: AppService) { }

  @Mutation(() => Auth)
  async signup(@Args('data') data: SignupInput) {
    // data.email = data.email.toLowerCase();
    // const { accessToken, refreshToken } = await this.app.createUser(data);
    // return {
    //   accessToken,
    //   refreshToken,
    // };
  }

  @Mutation(() => Auth)
  async login(@Args('data') { email, password }: LoginInput) {
    // const { accessToken, refreshToken } = await this.app.login(
    //   email.toLowerCase(),
    //   password
    // );

    // return {
    //   accessToken,
    //   refreshToken,
    // };
  }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenInput) {
    // return this.app.refreshToken(token);
  }

  @ResolveField('user', () => User)
  async user(@Parent() auth: Auth) {
    // return await this.app.getUserFromToken(auth.accessToken);
  }
}
