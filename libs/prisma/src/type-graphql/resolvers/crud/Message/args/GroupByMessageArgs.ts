import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageOrderByWithAggregationInput } from "../../../inputs/MessageOrderByWithAggregationInput";
import { MessageScalarWhereWithAggregatesInput } from "../../../inputs/MessageScalarWhereWithAggregatesInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";
import { MessageScalarFieldEnum } from "../../../../enums/MessageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMessageArgs {
  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MessageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MessageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "content" | "contentType" | "type" | "senderId" | "parentId" | "chatId">;

  @TypeGraphQL.Field(_type => MessageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MessageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
