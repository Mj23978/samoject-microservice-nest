import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatOrderByWithRelationInput } from "../inputs/ChatOrderByWithRelationInput";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserAssignedTasksOrderByRelationAggregateInput } from "../inputs/UserAssignedTasksOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TaskOrderByWithRelationInput", {
  isAbstract: true
})
export class TaskOrderByWithRelationInput {
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
  projectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creatorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  details?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChatOrderByWithRelationInput, {
    nullable: true
  })
  chat?: ChatOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  creator?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByWithRelationInput, {
    nullable: true
  })
  parent?: TaskOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByWithRelationInput, {
    nullable: true
  })
  project?: ProjectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  subTasks?: TaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksOrderByRelationAggregateInput, {
    nullable: true
  })
  assignes?: UserAssignedTasksOrderByRelationAggregateInput | undefined;
}
