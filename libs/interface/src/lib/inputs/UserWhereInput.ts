import { Field, InputType } from "@nestjs/graphql";
import { BoolFilter } from "../inputs/BoolFilter";
import { ChatRelationFilter } from "../inputs/ChatRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { ProjectListRelationFilter } from "../inputs/ProjectListRelationFilter";
import { ProjectsOnUsersListRelationFilter } from "../inputs/ProjectsOnUsersListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { UserAssignedTasksListRelationFilter } from "../inputs/UserAssignedTasksListRelationFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { WorkspaceRelationFilter } from "../inputs/WorkspaceRelationFilter";

@InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @Field(() => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @Field(() => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @Field(() => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

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
  email?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  firstname?: StringNullableFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  lastname?: StringNullableFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @Field(() => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  chatId?: StringNullableFilter | undefined;

  @Field(() => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @Field(() => ChatRelationFilter, {
    nullable: true
  })
  chat?: ChatRelationFilter | undefined;

  @Field(() => MessageListRelationFilter, {
    nullable: true
  })
  comments?: MessageListRelationFilter | undefined;

  @Field(() => ProjectListRelationFilter, {
    nullable: true
  })
  ownedProjects?: ProjectListRelationFilter | undefined;

  @Field(() => ProjectsOnUsersListRelationFilter, {
    nullable: true
  })
  projects?: ProjectsOnUsersListRelationFilter | undefined;

  @Field(() => TaskListRelationFilter, {
    nullable: true
  })
  createdTasks?: TaskListRelationFilter | undefined;

  @Field(() => UserAssignedTasksListRelationFilter, {
    nullable: true
  })
  assignedTasks?: UserAssignedTasksListRelationFilter | undefined;

  @Field(() => WorkspaceRelationFilter, {
    nullable: true
  })
  workspaces?: WorkspaceRelationFilter | undefined;

  @Field(() => UserListRelationFilter, {
    nullable: true
  })
  User_B?: UserListRelationFilter | undefined;

  @Field(() => UserListRelationFilter, {
    nullable: true
  })
  User_A?: UserListRelationFilter | undefined;
}
