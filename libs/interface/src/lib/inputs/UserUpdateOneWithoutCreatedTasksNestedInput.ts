import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutCreatedTasksInput } from "../inputs/UserCreateOrConnectWithoutCreatedTasksInput";
import { UserCreateWithoutCreatedTasksInput } from "../inputs/UserCreateWithoutCreatedTasksInput";
import { UserUpdateWithoutCreatedTasksInput } from "../inputs/UserUpdateWithoutCreatedTasksInput";
import { UserUpsertWithoutCreatedTasksInput } from "../inputs/UserUpsertWithoutCreatedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneWithoutCreatedTasksNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutCreatedTasksNestedInput {
  @Field(() => UserCreateWithoutCreatedTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedTasksInput | undefined;

  @Field(() => UserCreateOrConnectWithoutCreatedTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput | undefined;

  @Field(() => UserUpsertWithoutCreatedTasksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedTasksInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field(() => UserUpdateWithoutCreatedTasksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatedTasksInput | undefined;
}
