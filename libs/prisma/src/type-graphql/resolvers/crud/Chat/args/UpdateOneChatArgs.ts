import { ChatUpdateInput } from "../../../inputs/ChatUpdateInput";
import { ChatWhereUniqueInput } from "../../../inputs/ChatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneChatArgs {
  @Field(() => ChatUpdateInput, {
    nullable: false
  })
  data!: ChatUpdateInput;

  @Field(() => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;
}
