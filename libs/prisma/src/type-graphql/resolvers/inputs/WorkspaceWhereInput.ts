import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectListRelationFilter } from "../inputs/ProjectListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WorkspaceSettingsRelationFilter } from "../inputs/WorkspaceSettingsRelationFilter";

@TypeGraphQL.InputType("WorkspaceWhereInput", {
  isAbstract: true
})
export class WorkspaceWhereInput {
  @TypeGraphQL.Field(_type => [WorkspaceWhereInput], {
    nullable: true
  })
  AND?: WorkspaceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceWhereInput], {
    nullable: true
  })
  OR?: WorkspaceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceWhereInput], {
    nullable: true
  })
  NOT?: WorkspaceWhereInput[] | undefined;

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
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  settingsId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsRelationFilter, {
    nullable: true
  })
  settings?: WorkspaceSettingsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectListRelationFilter, {
    nullable: true
  })
  projects?: ProjectListRelationFilter | undefined;
}
