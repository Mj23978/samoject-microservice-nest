import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectSettingsWhereInput } from "../inputs/ProjectSettingsWhereInput";

@TypeGraphQL.InputType("ProjectSettingsRelationFilter", {
  isAbstract: true
})
export class ProjectSettingsRelationFilter {
  @TypeGraphQL.Field(_type => ProjectSettingsWhereInput, {
    nullable: true
  })
  is?: ProjectSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsWhereInput, {
    nullable: true
  })
  isNot?: ProjectSettingsWhereInput | undefined;
}
