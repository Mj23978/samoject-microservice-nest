import { ChatCreateInput } from "../../../inputs/ChatCreateInput";
import { ChatUpdateInput } from "../../../inputs/ChatUpdateInput";
import { ChatWhereUniqueInput } from "../../../inputs/ChatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneChatArgs {
  @Field(() => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @Field(() => ChatCreateInput, {
    nullable: false
  })
  create!: ChatCreateInput;

  @Field(() => ChatUpdateInput, {
    nullable: false
  })
  update!: ChatUpdateInput;
}
