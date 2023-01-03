import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsCreateInput } from "../../../inputs/WorkspaceSettingsCreateInput";
import { WorkspaceSettingsUpdateInput } from "../../../inputs/WorkspaceSettingsUpdateInput";
import { WorkspaceSettingsWhereUniqueInput } from "../../../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWorkspaceSettingsArgs {
  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspaceSettingsCreateInput, {
    nullable: false
  })
  create!: WorkspaceSettingsCreateInput;

  @TypeGraphQL.Field(_type => WorkspaceSettingsUpdateInput, {
    nullable: false
  })
  update!: WorkspaceSettingsUpdateInput;
}
