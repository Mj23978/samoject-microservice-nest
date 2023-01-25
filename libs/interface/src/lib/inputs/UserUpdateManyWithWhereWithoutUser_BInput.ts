import { Field, InputType } from "@nestjs/graphql";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyMutationInput } from "../inputs/UserUpdateManyMutationInput";

@InputType("UserUpdateManyWithWhereWithoutUser_BInput", {
  isAbstract: true
})
export class UserUpdateManyWithWhereWithoutUser_BInput {
  @Field(() => UserScalarWhereInput, {
    nullable: false
  })
  where!: UserScalarWhereInput;

  @Field(() => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;
}
