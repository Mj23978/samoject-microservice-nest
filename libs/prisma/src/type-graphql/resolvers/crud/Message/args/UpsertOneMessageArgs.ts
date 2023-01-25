import { MessageCreateInput } from "../../../inputs/MessageCreateInput";
import { MessageUpdateInput } from "../../../inputs/MessageUpdateInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMessageArgs {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageCreateInput, {
    nullable: false
  })
  create!: MessageCreateInput;

  @Field(() => MessageUpdateInput, {
    nullable: false
  })
  update!: MessageUpdateInput;
}
