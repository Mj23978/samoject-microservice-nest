import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@InputType("UserAssignedTasksOrderByWithRelationInput", {
  isAbstract: true
})
export class UserAssignedTasksOrderByWithRelationInput {
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

  @Field(() => TaskOrderByWithRelationInput, {
    nullable: true
  })
  task?: TaskOrderByWithRelationInput | undefined;

  @Field(() => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;
}
