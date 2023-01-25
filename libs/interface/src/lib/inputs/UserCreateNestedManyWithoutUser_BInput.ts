import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutUser_BInput } from "../inputs/UserCreateOrConnectWithoutUser_BInput";
import { UserCreateWithoutUser_BInput } from "../inputs/UserCreateWithoutUser_BInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedManyWithoutUser_BInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutUser_BInput {
  @Field(() => [UserCreateWithoutUser_BInput], {
    nullable: true
  })
  create?: UserCreateWithoutUser_BInput[] | undefined;

  @Field(() => [UserCreateOrConnectWithoutUser_BInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_BInput[] | undefined;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
