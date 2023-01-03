import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateOrConnectWithoutSettingsInput } from "../inputs/WorkspaceCreateOrConnectWithoutSettingsInput";
import { WorkspaceCreateWithoutSettingsInput } from "../inputs/WorkspaceCreateWithoutSettingsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceCreateNestedOneWithoutSettingsInput", {
  isAbstract: true
})
export class WorkspaceCreateNestedOneWithoutSettingsInput {
  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;
}
