import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ProjectSettingsWhereInput", {
  isAbstract: true
})
export class ProjectSettingsWhereInput {
  @TypeGraphQL.Field(_type => [ProjectSettingsWhereInput], {
    nullable: true
  })
  AND?: ProjectSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectSettingsWhereInput], {
    nullable: true
  })
  OR?: ProjectSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectSettingsWhereInput], {
    nullable: true
  })
  NOT?: ProjectSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  localId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;
}
