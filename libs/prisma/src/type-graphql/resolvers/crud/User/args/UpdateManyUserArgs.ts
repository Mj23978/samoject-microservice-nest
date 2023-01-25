import { UserUpdateManyMutationInput } from "../../../inputs/UserUpdateManyMutationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserArgs {
  @Field(() => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;

  @Field(() => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
