import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceOrderByWithAggregationInput } from "../../../inputs/SpaceOrderByWithAggregationInput";
import { SpaceScalarWhereWithAggregatesInput } from "../../../inputs/SpaceScalarWhereWithAggregatesInput";
import { SpaceWhereInput } from "../../../inputs/SpaceWhereInput";
import { SpaceScalarFieldEnum } from "../../../../enums/SpaceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySpaceArgs {
  @TypeGraphQL.Field(_type => SpaceWhereInput, {
    nullable: true
  })
  where?: SpaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpaceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SpaceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "viewId" | "projectId" | "settingsId" | "spaceType" | "parentId" | "chatId">;

  @TypeGraphQL.Field(_type => SpaceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SpaceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
