import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJWT } from 'graphql-scalars';

@ObjectType()
export class Token {
  @Field(() => GraphQLJWT, { description: 'JWT access token' })
  accessToken: string;

  @Field(() => String, { description: 'JWT refresh token' })
  refreshToken: string;

  @Field(() => String, { description: 'Token Type' })
  tokenType: string;

  @Field(() => Int, { description: 'Token Type' })
  expiresAt: number;
}
