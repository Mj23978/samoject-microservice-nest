import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatCreateInput } from "../../../inputs/ChatCreateInput";
import { ChatUpdateInput } from "../../../inputs/ChatUpdateInput";
import { ChatWhereUniqueInput } from "../../../inputs/ChatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneChatArgs {
  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatCreateInput, {
    nullable: false
  })
  create!: ChatCreateInput;

  @TypeGraphQL.Field(_type => ChatUpdateInput, {
    nullable: false
  })
  update!: ChatUpdateInput;
}
