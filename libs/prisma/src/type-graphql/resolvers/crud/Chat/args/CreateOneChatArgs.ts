import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatCreateInput } from "../../../inputs/ChatCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneChatArgs {
  @TypeGraphQL.Field(_type => ChatCreateInput, {
    nullable: false
  })
  data!: ChatCreateInput;
}
