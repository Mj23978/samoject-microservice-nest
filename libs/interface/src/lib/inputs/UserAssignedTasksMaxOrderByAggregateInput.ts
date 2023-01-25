import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("UserAssignedTasksMaxOrderByAggregateInput", {
  isAbstract: true
})
export class UserAssignedTasksMaxOrderByAggregateInput {
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
}
