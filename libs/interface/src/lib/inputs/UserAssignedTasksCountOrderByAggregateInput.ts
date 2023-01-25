import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("UserAssignedTasksCountOrderByAggregateInput", {
  isAbstract: true
})
export class UserAssignedTasksCountOrderByAggregateInput {
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
