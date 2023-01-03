import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput";
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateWithoutWorkspaceInput";
import { WorkspaceSettingsWhereUniqueInput } from "../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput", {
  isAbstract: true
})
export class WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput {
  @TypeGraphQL.Field(_type => WorkspaceSettingsCreateWithoutWorkspaceInput, {
    nullable: true
  })
  create?: WorkspaceSettingsCreateWithoutWorkspaceInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceSettingsWhereUniqueInput | undefined;
}
