import { Field, ObjectType } from "@nestjs/graphql";
import { Role } from "../enums/Role";

@ObjectType("UserMaxAggregate", {
  isAbstract: true
})
export class UserMaxAggregate {
  @Field(() => String, {
    nullable: true
  })
  id!: string | null;

  @Field(() => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @Field(() => String, {
    nullable: true
  })
  email!: string | null;

  @Field(() => String, {
    nullable: true
  })
  password!: string | null;

  @Field(() => String, {
    nullable: true
  })
  firstname!: string | null;

  @Field(() => String, {
    nullable: true
  })
  lastname!: string | null;

  @Field(() => String, {
    nullable: true
  })
  username!: string | null;

  @Field(() => Boolean, {
    nullable: true
  })
  active!: boolean | null;

  @Field(() => String, {
    nullable: true
  })
  chatId!: string | null;

  @Field(() => Role, {
    nullable: true
  })
  role!: "ADMIN" | "USER" | null;
}
