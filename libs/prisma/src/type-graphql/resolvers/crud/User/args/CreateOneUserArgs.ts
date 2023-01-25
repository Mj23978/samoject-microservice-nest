import { UserCreateInput } from "../../../inputs/UserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserArgs {
  @Field(() => UserCreateInput, {
    nullable: false
  })
  data!: UserCreateInput;
}
