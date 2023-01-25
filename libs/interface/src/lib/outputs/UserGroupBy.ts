import { Field, ObjectType } from "@nestjs/graphql";
import { Role } from "../enums/Role";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";

@ObjectType("UserGroupBy", {
  isAbstract: true
})
export class UserGroupBy {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
  firstname!: string | null;

  @Field(() => String, {
    nullable: true
  })
  lastname!: string | null;

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
  chatId!: string | null;

  @Field(() => Role, {
    nullable: false
  })
  role!: "ADMIN" | "USER";

  @Field(() => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @Field(() => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @Field(() => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
