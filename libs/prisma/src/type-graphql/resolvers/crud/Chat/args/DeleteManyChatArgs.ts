import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatWhereInput } from "../../../inputs/ChatWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyChatArgs {
  @TypeGraphQL.Field(_type => ChatWhereInput, {
    nullable: true
  })
  where?: ChatWhereInput | undefined;
}
