import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateWithoutSettingsInput } from "../inputs/WorkspaceCreateWithoutSettingsInput";
import { WorkspaceUpdateWithoutSettingsInput } from "../inputs/WorkspaceUpdateWithoutSettingsInput";

@TypeGraphQL.InputType("WorkspaceUpsertWithoutSettingsInput", {
  isAbstract: true
})
export class WorkspaceUpsertWithoutSettingsInput {
  @TypeGraphQL.Field(_type => WorkspaceUpdateWithoutSettingsInput, {
    nullable: false
  })
  update!: WorkspaceUpdateWithoutSettingsInput;

  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutSettingsInput;
}
