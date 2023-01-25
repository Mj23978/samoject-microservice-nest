import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutCreatedTasksInput } from "../inputs/UserCreateWithoutCreatedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutCreatedTasksInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutCreatedTasksInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutCreatedTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedTasksInput;
}
