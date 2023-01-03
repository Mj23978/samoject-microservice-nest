import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatUpdateInput } from "../../../inputs/ChatUpdateInput";
import { ChatWhereUniqueInput } from "../../../inputs/ChatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneChatArgs {
  @TypeGraphQL.Field(_type => ChatUpdateInput, {
    nullable: false
  })
  data!: ChatUpdateInput;

  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;
}
