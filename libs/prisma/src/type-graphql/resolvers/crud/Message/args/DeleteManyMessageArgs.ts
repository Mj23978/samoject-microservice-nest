import { MessageWhereInput } from "../../../inputs/MessageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMessageArgs {
  @Field(() => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;
}
