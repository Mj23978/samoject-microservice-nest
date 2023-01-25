import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@InputType("UserAssignedTasksWhereInput", {
  isAbstract: true
})
export class UserAssignedTasksWhereInput {
  @Field(() => [UserAssignedTasksWhereInput], {
    nullable: true
  })
  AND?: UserAssignedTasksWhereInput[] | undefined;

  @Field(() => [UserAssignedTasksWhereInput], {
    nullable: true
  })
  OR?: UserAssignedTasksWhereInput[] | undefined;

  @Field(() => [UserAssignedTasksWhereInput], {
    nullable: true
  })
  NOT?: UserAssignedTasksWhereInput[] | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  taskId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  assignedBy?: StringFilter | undefined;

  @Field(() => TaskRelationFilter, {
    nullable: true
  })
  task?: TaskRelationFilter | undefined;

  @Field(() => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
