import { Inject } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import {
  Auth,
  CreateUserInput, DeleteUserOutput, RefreshTokenInput, Token, UpdateUserInput, User
} from '@samoject/interface';
import { PUB_SUB } from '@samoject/redis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { UserService } from './auth.service';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(@Inject(PUB_SUB) private readonly pubSub: RedisPubSub, private readonly authService: UserService,) { }

  @Mutation(() => User)
  signup(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.authService.signup(createUserInput);
  }

  @Query(() => [User])
  signInWithEmail(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.signInWithEmail(loginInput);
  }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenInput) {
    return this.authService.refreshToken(token);
  }

  @ResolveField('user', () => User)
  async user(@Parent() auth: Auth) {
    return await this.authService.getUserFromToken(auth.accessToken);
  }

}