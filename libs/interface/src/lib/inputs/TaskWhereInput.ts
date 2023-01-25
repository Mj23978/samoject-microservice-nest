import { Field, InputType } from "@nestjs/graphql";
import { ChatRelationFilter } from "../inputs/ChatRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
import { UserAssignedTasksListRelationFilter } from "../inputs/UserAssignedTasksListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@InputType("TaskWhereInput", {
  isAbstract: true
})
export class TaskWhereInput {
  @Field(() => [TaskWhereInput], {
    nullable: true
  })
  AND?: TaskWhereInput[] | undefined;

  @Field(() => [TaskWhereInput], {
    nullable: true
  })
  OR?: TaskWhereInput[] | undefined;

  @Field(() => [TaskWhereInput], {
    nullable: true
  })
  NOT?: TaskWhereInput[] | undefined;

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

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  projectId?: StringNullableFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  creatorId?: StringNullableFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  parentId?: StringNullableFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  details?: StringFilter | undefined;

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
  creator?: UserRelationFilter | undefined;

  @Field(() => TaskRelationFilter, {
    nullable: true
  })
  parent?: TaskRelationFilter | undefined;

  @Field(() => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @Field(() => TaskListRelationFilter, {
    nullable: true
  })
  subTasks?: TaskListRelationFilter | undefined;

  @Field(() => UserAssignedTasksListRelationFilter, {
    nullable: true
  })
  assignes?: UserAssignedTasksListRelationFilter | undefined;
}
