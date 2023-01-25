import { Field, InputType } from "@nestjs/graphql";
import { Role } from "../enums/Role";

@InputType("UserCreateManyInput", {
  isAbstract: true
})
export class UserCreateManyInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  email!: string;

  @Field(() => String, {
    nullable: false
  })
  password!: string;

  @Field(() => String, {
    nullable: true
  })
  firstname?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  lastname?: string | undefined;

  @Field(() => String, {
    nullable: false
  })
  username!: string;

  @Field(() => Boolean, {
    nullable: false
  })
  active!: boolean;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | undefined;

  @Field(() => Role, {
    nullable: false
  })
  role!: "ADMIN" | "USER";
}
