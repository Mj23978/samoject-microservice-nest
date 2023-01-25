import { ChatWhereUniqueInput } from "../../../inputs/ChatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueChatArgs {
  @Field(() => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;
}
