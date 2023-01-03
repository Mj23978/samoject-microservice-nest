import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateWithoutWorkspaceInput";
import { WorkspaceSettingsWhereUniqueInput } from "../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput", {
  isAbstract: true
})
export class WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput {
  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspaceSettingsCreateWithoutWorkspaceInput, {
    nullable: false
  })
  create!: WorkspaceSettingsCreateWithoutWorkspaceInput;
}
