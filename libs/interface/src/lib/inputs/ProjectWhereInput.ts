import { Field, InputType } from "@nestjs/graphql";
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

@InputType("ProjectWhereInput", {
  isAbstract: true
})
export class ProjectWhereInput {
  @Field(() => [ProjectWhereInput], {
    nullable: true
  })
  AND?: ProjectWhereInput[] | undefined;

  @Field(() => [ProjectWhereInput], {
    nullable: true
  })
  OR?: ProjectWhereInput[] | undefined;

  @Field(() => [ProjectWhereInput], {
    nullable: true
  })
  NOT?: ProjectWhereInput[] | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  settingsId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  workspaceId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  chatId?: StringNullableFilter | undefined;

  @Field(() => ChatRelationFilter, {
    nullable: true
  })
  chat?: ChatRelationFilter | undefined;

  @Field(() => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @Field(() => ProjectSettingsRelationFilter, {
    nullable: true
  })
  settings?: ProjectSettingsRelationFilter | undefined;

  @Field(() => WorkspaceRelationFilter, {
    nullable: true
  })
  workspace?: WorkspaceRelationFilter | undefined;

  @Field(() => ProjectsOnUsersListRelationFilter, {
    nullable: true
  })
  users?: ProjectsOnUsersListRelationFilter | undefined;

  @Field(() => SpaceListRelationFilter, {
    nullable: true
  })
  spaces?: SpaceListRelationFilter | undefined;

  @Field(() => TaskListRelationFilter, {
    nullable: true
  })
  tasks?: TaskListRelationFilter | undefined;
}
