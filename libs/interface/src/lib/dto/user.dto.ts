import { InputType, Field, PartialType, ObjectType } from '@nestjs/graphql';
import { Role } from '@samoject/prisma';
@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Username' })
  username: string;

  @Field(() => String, { description: 'Password' })
  password: string;

  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => Boolean, { description: 'Active' })
  active: boolean;

  @Field(() => Role, { description: 'Role' })
  role: Role;
}

@ObjectType()
export class DeleteUserOutput {
  @Field()
  deleted: boolean;
}
