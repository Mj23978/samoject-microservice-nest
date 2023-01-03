import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsOrderByWithAggregationInput } from "../../../inputs/SpaceSettingsOrderByWithAggregationInput";
import { SpaceSettingsScalarWhereWithAggregatesInput } from "../../../inputs/SpaceSettingsScalarWhereWithAggregatesInput";
import { SpaceSettingsWhereInput } from "../../../inputs/SpaceSettingsWhereInput";
import { SpaceSettingsScalarFieldEnum } from "../../../../enums/SpaceSettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySpaceSettingsArgs {
  @TypeGraphQL.Field(_type => SpaceSettingsWhereInput, {
    nullable: true
  })
  where?: SpaceSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SpaceSettingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SpaceSettingsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceSettingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "localId" | "spaceId">;

  @TypeGraphQL.Field(_type => SpaceSettingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SpaceSettingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
