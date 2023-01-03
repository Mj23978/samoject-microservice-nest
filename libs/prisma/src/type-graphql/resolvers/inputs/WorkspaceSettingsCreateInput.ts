import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateNestedOneWithoutSettingsInput } from "../inputs/WorkspaceCreateNestedOneWithoutSettingsInput";

@TypeGraphQL.InputType("WorkspaceSettingsCreateInput", {
  isAbstract: true
})
export class WorkspaceSettingsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  localId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  workspaceId!: string;

  @TypeGraphQL.Field(_type => WorkspaceCreateNestedOneWithoutSettingsInput, {
    nullable: true
  })
  workspace?: WorkspaceCreateNestedOneWithoutSettingsInput | undefined;
}
