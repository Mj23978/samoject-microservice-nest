import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateWithoutWorkspaceInput";
import { WorkspaceSettingsUpdateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsUpdateWithoutWorkspaceInput";

@TypeGraphQL.InputType("WorkspaceSettingsUpsertWithoutWorkspaceInput", {
  isAbstract: true
})
export class WorkspaceSettingsUpsertWithoutWorkspaceInput {
  @TypeGraphQL.Field(_type => WorkspaceSettingsUpdateWithoutWorkspaceInput, {
    nullable: false
  })
  update!: WorkspaceSettingsUpdateWithoutWorkspaceInput;

  @TypeGraphQL.Field(_type => WorkspaceSettingsCreateWithoutWorkspaceInput, {
    nullable: false
  })
  create!: WorkspaceSettingsCreateWithoutWorkspaceInput;
}
