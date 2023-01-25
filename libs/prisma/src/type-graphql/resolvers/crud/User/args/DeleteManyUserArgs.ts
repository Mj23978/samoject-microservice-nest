import { UserWhereInput } from "../../../inputs/UserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserArgs {
  @Field(() => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
