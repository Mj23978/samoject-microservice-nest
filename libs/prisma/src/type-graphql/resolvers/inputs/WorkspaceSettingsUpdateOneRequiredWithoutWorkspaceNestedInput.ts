import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput";
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateWithoutWorkspaceInput";
import { WorkspaceSettingsUpdateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsUpdateWithoutWorkspaceInput";
import { WorkspaceSettingsUpsertWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsUpsertWithoutWorkspaceInput";
import { WorkspaceSettingsWhereUniqueInput } from "../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput", {
  isAbstract: true
})
export class WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput {
  @TypeGraphQL.Field(_type => WorkspaceSettingsCreateWithoutWorkspaceInput, {
    nullable: true
  })
  create?: WorkspaceSettingsCreateWithoutWorkspaceInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsUpsertWithoutWorkspaceInput, {
    nullable: true
  })
  upsert?: WorkspaceSettingsUpsertWithoutWorkspaceInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsUpdateWithoutWorkspaceInput, {
    nullable: true
  })
  update?: WorkspaceSettingsUpdateWithoutWorkspaceInput | undefined;
}
