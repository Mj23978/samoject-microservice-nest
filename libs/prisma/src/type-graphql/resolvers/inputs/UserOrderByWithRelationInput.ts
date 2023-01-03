import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatOrderByWithRelationInput } from "../inputs/ChatOrderByWithRelationInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { ProjectOrderByRelationAggregateInput } from "../inputs/ProjectOrderByRelationAggregateInput";
import { ProjectsOnUsersOrderByRelationAggregateInput } from "../inputs/ProjectsOnUsersOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserAssignedTasksOrderByRelationAggregateInput } from "../inputs/UserAssignedTasksOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { WorkspaceOrderByWithRelationInput } from "../inputs/WorkspaceOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChatOrderByWithRelationInput, {
    nullable: true
  })
  chat?: ChatOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: MessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByRelationAggregateInput, {
    nullable: true
  })
  ownedProjects?: ProjectOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: ProjectsOnUsersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  createdTasks?: TaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksOrderByRelationAggregateInput, {
    nullable: true
  })
  assignedTasks?: UserAssignedTasksOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceOrderByWithRelationInput, {
    nullable: true
  })
  workspaces?: WorkspaceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  User_B?: UserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  User_A?: UserOrderByRelationAggregateInput | undefined;
}
