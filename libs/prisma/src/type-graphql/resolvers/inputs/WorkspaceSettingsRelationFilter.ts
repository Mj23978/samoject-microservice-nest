import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceSettingsWhereInput } from "../inputs/WorkspaceSettingsWhereInput";

@TypeGraphQL.InputType("WorkspaceSettingsRelationFilter", {
  isAbstract: true
})
export class WorkspaceSettingsRelationFilter {
  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  is?: WorkspaceSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  isNot?: WorkspaceSettingsWhereInput | undefined;
}
