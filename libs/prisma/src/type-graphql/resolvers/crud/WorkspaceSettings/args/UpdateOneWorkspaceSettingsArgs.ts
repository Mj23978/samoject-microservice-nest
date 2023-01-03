import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsUpdateInput } from "../../../inputs/WorkspaceSettingsUpdateInput";
import { WorkspaceSettingsWhereUniqueInput } from "../../../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWorkspaceSettingsArgs {
  @TypeGraphQL.Field(_type => WorkspaceSettingsUpdateInput, {
    nullable: false
  })
  data!: WorkspaceSettingsUpdateInput;

  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceSettingsWhereUniqueInput;
}
