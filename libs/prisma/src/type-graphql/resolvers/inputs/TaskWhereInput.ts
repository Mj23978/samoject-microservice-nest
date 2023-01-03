import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatRelationFilter } from "../inputs/ChatRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
import { UserAssignedTasksListRelationFilter } from "../inputs/UserAssignedTasksListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TaskWhereInput", {
  isAbstract: true
})
export class TaskWhereInput {
  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  AND?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  OR?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  NOT?: TaskWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  projectId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  creatorId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parentId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  details?: StringFilter | undefined;

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
  creator?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskRelationFilter, {
    nullable: true
  })
  parent?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  subTasks?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksListRelationFilter, {
    nullable: true
  })
  assignes?: UserAssignedTasksListRelationFilter | undefined;
}
