import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutCommentsInput } from "../inputs/UserCreateOrConnectWithoutCommentsInput";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCommentsInput {
  @Field(() => UserCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCommentsInput | undefined;

  @Field(() => UserCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCommentsInput | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
