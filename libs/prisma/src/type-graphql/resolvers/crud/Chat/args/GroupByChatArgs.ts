import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatOrderByWithAggregationInput } from "../../../inputs/ChatOrderByWithAggregationInput";
import { ChatScalarWhereWithAggregatesInput } from "../../../inputs/ChatScalarWhereWithAggregatesInput";
import { ChatWhereInput } from "../../../inputs/ChatWhereInput";
import { ChatScalarFieldEnum } from "../../../../enums/ChatScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChatArgs {
  @TypeGraphQL.Field(_type => ChatWhereInput, {
    nullable: true
  })
  where?: ChatWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChatOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ChatScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChatScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
