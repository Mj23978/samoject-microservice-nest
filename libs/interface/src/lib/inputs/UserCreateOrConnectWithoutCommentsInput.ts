import { Field, InputType } from "@nestjs/graphql";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutCommentsInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCommentsInput;
}
