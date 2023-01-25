import { Field, InputType } from "@nestjs/graphql";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyMutationInput } from "../inputs/UserUpdateManyMutationInput";

@InputType("UserUpdateManyWithWhereWithoutUser_AInput", {
  isAbstract: true
})
export class UserUpdateManyWithWhereWithoutUser_AInput {
  @Field(() => UserScalarWhereInput, {
    nullable: false
  })
  where!: UserScalarWhereInput;

  @Field(() => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;
}
