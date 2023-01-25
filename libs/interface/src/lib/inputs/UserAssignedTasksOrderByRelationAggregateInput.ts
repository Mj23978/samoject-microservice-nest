import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("UserAssignedTasksOrderByRelationAggregateInput", {
  isAbstract: true
})
export class UserAssignedTasksOrderByRelationAggregateInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  _count?: "asc" | "desc" | undefined;
}
