import { ChatCreateInput } from "../../../inputs/ChatCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneChatArgs {
  @Field(() => ChatCreateInput, {
    nullable: false
  })
  data!: ChatCreateInput;
}
