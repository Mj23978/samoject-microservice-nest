import { UserCreateInput } from "../../../inputs/UserCreateInput";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateInput, {
    nullable: false
  })
  create!: UserCreateInput;

  @Field(() => UserUpdateInput, {
    nullable: false
  })
  update!: UserUpdateInput;
}
