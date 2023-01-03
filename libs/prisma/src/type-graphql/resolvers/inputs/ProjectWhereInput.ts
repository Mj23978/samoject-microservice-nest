import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatRelationFilter } from "../inputs/ChatRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectSettingsRelationFilter } from "../inputs/ProjectSettingsRelationFilter";
import { ProjectsOnUsersListRelationFilter } from "../inputs/ProjectsOnUsersListRelationFilter";
import { SpaceListRelationFilter } from "../inputs/SpaceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WorkspaceRelationFilter } from "../inputs/WorkspaceRelationFilter";

@TypeGraphQL.InputType("ProjectWhereInput", {
  isAbstract: true
})
export class ProjectWhereInput {
  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  AND?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  OR?: ProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereInput], {
    nullable: true
  })
  NOT?: ProjectWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  settingsId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  workspaceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  chatId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ChatRelationFilter, {
    nullable: true
  })
  chat?: ChatRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsRelationFilter, {
    nullable: true
  })
  settings?: ProjectSettingsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WorkspaceRelationFilter, {
    nullable: true
  })
  workspace?: WorkspaceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersListRelationFilter, {
    nullable: true
  })
  users?: ProjectsOnUsersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SpaceListRelationFilter, {
    nullable: true
  })
  spaces?: SpaceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  tasks?: TaskListRelationFilter | undefined;
}
