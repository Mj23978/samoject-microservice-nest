import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutUser_AInput } from "../inputs/UserCreateOrConnectWithoutUser_AInput";
import { UserCreateWithoutUser_AInput } from "../inputs/UserCreateWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedManyWithoutUser_AInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutUser_AInput {
  @Field(() => [UserCreateWithoutUser_AInput], {
    nullable: true
  })
  create?: UserCreateWithoutUser_AInput[] | undefined;

  @Field(() => [UserCreateOrConnectWithoutUser_AInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_AInput[] | undefined;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
