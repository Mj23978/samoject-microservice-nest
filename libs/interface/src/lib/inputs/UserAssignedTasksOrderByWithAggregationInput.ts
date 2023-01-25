import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { UserAssignedTasksCountOrderByAggregateInput } from "../inputs/UserAssignedTasksCountOrderByAggregateInput";
import { UserAssignedTasksMaxOrderByAggregateInput } from "../inputs/UserAssignedTasksMaxOrderByAggregateInput";
import { UserAssignedTasksMinOrderByAggregateInput } from "../inputs/UserAssignedTasksMinOrderByAggregateInput";

@InputType("UserAssignedTasksOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserAssignedTasksOrderByWithAggregationInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  taskId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  assignedBy?: "asc" | "desc" | undefined;

  @Field(() => UserAssignedTasksCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserAssignedTasksCountOrderByAggregateInput | undefined;

  @Field(() => UserAssignedTasksMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserAssignedTasksMaxOrderByAggregateInput | undefined;

  @Field(() => UserAssignedTasksMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserAssignedTasksMinOrderByAggregateInput | undefined;
}
