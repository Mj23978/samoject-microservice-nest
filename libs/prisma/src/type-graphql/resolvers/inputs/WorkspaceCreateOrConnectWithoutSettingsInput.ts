import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateWithoutSettingsInput } from "../inputs/WorkspaceCreateWithoutSettingsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceCreateOrConnectWithoutSettingsInput", {
  isAbstract: true
})
export class WorkspaceCreateOrConnectWithoutSettingsInput {
  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutSettingsInput;
}
