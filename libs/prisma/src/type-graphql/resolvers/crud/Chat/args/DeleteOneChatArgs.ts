import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatWhereUniqueInput } from "../../../inputs/ChatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneChatArgs {
  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;
}
