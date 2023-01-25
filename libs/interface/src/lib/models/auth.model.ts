import { Field, ObjectType } from '@nestjs/graphql';
import { Token } from './token.model';
import { User } from './user.model';

@ObjectType()
export class Auth extends Token {
  user: User;

  @Field(() => String, { description: 'Usser Auth Status' })
  aud: string
}
