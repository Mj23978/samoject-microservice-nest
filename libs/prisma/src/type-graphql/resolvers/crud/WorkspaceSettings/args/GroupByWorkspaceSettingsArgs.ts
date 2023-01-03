import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsOrderByWithAggregationInput } from "../../../inputs/WorkspaceSettingsOrderByWithAggregationInput";
import { WorkspaceSettingsScalarWhereWithAggregatesInput } from "../../../inputs/WorkspaceSettingsScalarWhereWithAggregatesInput";
import { WorkspaceSettingsWhereInput } from "../../../inputs/WorkspaceSettingsWhereInput";
import { WorkspaceSettingsScalarFieldEnum } from "../../../../enums/WorkspaceSettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWorkspaceSettingsArgs {
  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  where?: WorkspaceSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceSettingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WorkspaceSettingsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceSettingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "localId" | "workspaceId">;

  @TypeGraphQL.Field(_type => WorkspaceSettingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WorkspaceSettingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
