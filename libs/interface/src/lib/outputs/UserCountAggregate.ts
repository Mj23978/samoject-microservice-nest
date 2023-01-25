import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("UserCountAggregate", {
  isAbstract: true
})
export class UserCountAggregate {
  @Field(() => Int, {
    nullable: false
  })
  id!: number;

  @Field(() => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  email!: number;

  @Field(() => Int, {
    nullable: false
  })
  password!: number;

  @Field(() => Int, {
    nullable: false
  })
  firstname!: number;

  @Field(() => Int, {
    nullable: false
  })
  lastname!: number;

  @Field(() => Int, {
    nullable: false
  })
  username!: number;

  @Field(() => Int, {
    nullable: false
  })
  active!: number;

  @Field(() => Int, {
    nullable: false
  })
  chatId!: number;

  @Field(() => Int, {
    nullable: false
  })
  role!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
