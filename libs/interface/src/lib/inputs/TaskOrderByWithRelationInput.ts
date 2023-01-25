import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ChatOrderByWithRelationInput } from "../inputs/ChatOrderByWithRelationInput";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserAssignedTasksOrderByRelationAggregateInput } from "../inputs/UserAssignedTasksOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@InputType("TaskOrderByWithRelationInput", {
  isAbstract: true
})
export class TaskOrderByWithRelationInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  creatorId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  details?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @Field(() => ChatOrderByWithRelationInput, {
    nullable: true
  })
  chat?: ChatOrderByWithRelationInput | undefined;

  @Field(() => UserOrderByWithRelationInput, {
    nullable: true
  })
  creator?: UserOrderByWithRelationInput | undefined;

  @Field(() => TaskOrderByWithRelationInput, {
    nullable: true
  })
  parent?: TaskOrderByWithRelationInput | undefined;

  @Field(() => ProjectOrderByWithRelationInput, {
    nullable: true
  })
  project?: ProjectOrderByWithRelationInput | undefined;

  @Field(() => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  subTasks?: TaskOrderByRelationAggregateInput | undefined;

  @Field(() => UserAssignedTasksOrderByRelationAggregateInput, {
    nullable: true
  })
  assignes?: UserAssignedTasksOrderByRelationAggregateInput | undefined;
}
