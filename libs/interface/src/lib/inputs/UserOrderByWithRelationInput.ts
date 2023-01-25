import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ChatOrderByWithRelationInput } from "../inputs/ChatOrderByWithRelationInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { ProjectOrderByRelationAggregateInput } from "../inputs/ProjectOrderByRelationAggregateInput";
import { ProjectsOnUsersOrderByRelationAggregateInput } from "../inputs/ProjectsOnUsersOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserAssignedTasksOrderByRelationAggregateInput } from "../inputs/UserAssignedTasksOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { WorkspaceOrderByWithRelationInput } from "../inputs/WorkspaceOrderByWithRelationInput";

@InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
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
  email?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  firstname?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  lastname?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @Field(() => ChatOrderByWithRelationInput, {
    nullable: true
  })
  chat?: ChatOrderByWithRelationInput | undefined;

  @Field(() => MessageOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: MessageOrderByRelationAggregateInput | undefined;

  @Field(() => ProjectOrderByRelationAggregateInput, {
    nullable: true
  })
  ownedProjects?: ProjectOrderByRelationAggregateInput | undefined;

  @Field(() => ProjectsOnUsersOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: ProjectsOnUsersOrderByRelationAggregateInput | undefined;

  @Field(() => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  createdTasks?: TaskOrderByRelationAggregateInput | undefined;

  @Field(() => UserAssignedTasksOrderByRelationAggregateInput, {
    nullable: true
  })
  assignedTasks?: UserAssignedTasksOrderByRelationAggregateInput | undefined;

  @Field(() => WorkspaceOrderByWithRelationInput, {
    nullable: true
  })
  workspaces?: WorkspaceOrderByWithRelationInput | undefined;

  @Field(() => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  User_B?: UserOrderByRelationAggregateInput | undefined;

  @Field(() => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  User_A?: UserOrderByRelationAggregateInput | undefined;
}
