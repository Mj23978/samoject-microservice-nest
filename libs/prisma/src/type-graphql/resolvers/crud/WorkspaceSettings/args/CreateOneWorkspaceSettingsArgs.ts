import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsCreateInput } from "../../../inputs/WorkspaceSettingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWorkspaceSettingsArgs {
  @TypeGraphQL.Field(_type => WorkspaceSettingsCreateInput, {
    nullable: false
  })
  data!: WorkspaceSettingsCreateInput;
}
