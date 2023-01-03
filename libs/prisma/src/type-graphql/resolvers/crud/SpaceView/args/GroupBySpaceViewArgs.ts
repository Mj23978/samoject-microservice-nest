import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceViewOrderByWithAggregationInput } from "../../../inputs/SpaceViewOrderByWithAggregationInput";
import { SpaceViewScalarWhereWithAggregatesInput } from "../../../inputs/SpaceViewScalarWhereWithAggregatesInput";
import { SpaceViewWhereInput } from "../../../inputs/SpaceViewWhereInput";
import { SpaceViewScalarFieldEnum } from "../../../../enums/SpaceViewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySpaceViewArgs {
  @TypeGraphQL.Field(_type => SpaceViewWhereInput, {
    nullable: true
  })
  where?: SpaceViewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpaceViewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SpaceViewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceViewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "localId" | "spaceId">;

  @TypeGraphQL.Field(_type => SpaceViewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SpaceViewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
