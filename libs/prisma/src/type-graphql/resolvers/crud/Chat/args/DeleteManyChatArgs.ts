import { ChatWhereInput } from "../../../inputs/ChatWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyChatArgs {
  @Field(() => ChatWhereInput, {
    nullable: true
  })
  where?: ChatWhereInput | undefined;
}
