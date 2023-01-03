import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCountOrderByAggregateInput } from "../inputs/UserAssignedTasksCountOrderByAggregateInput";
import { UserAssignedTasksMaxOrderByAggregateInput } from "../inputs/UserAssignedTasksMaxOrderByAggregateInput";
import { UserAssignedTasksMinOrderByAggregateInput } from "../inputs/UserAssignedTasksMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserAssignedTasksOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserAssignedTasksOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taskId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedBy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserAssignedTasksCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserAssignedTasksMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserAssignedTasksMinOrderByAggregateInput | undefined;
}
