import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsOrderByWithAggregationInput } from "../../../inputs/ProjectSettingsOrderByWithAggregationInput";
import { ProjectSettingsScalarWhereWithAggregatesInput } from "../../../inputs/ProjectSettingsScalarWhereWithAggregatesInput";
import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";
import { ProjectSettingsScalarFieldEnum } from "../../../../enums/ProjectSettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectSettingsArgs {
  @TypeGraphQL.Field(_type => ProjectSettingsWhereInput, {
    nullable: true
  })
  where?: ProjectSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectSettingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProjectSettingsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectSettingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "localId" | "projectId">;

  @TypeGraphQL.Field(_type => ProjectSettingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectSettingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
