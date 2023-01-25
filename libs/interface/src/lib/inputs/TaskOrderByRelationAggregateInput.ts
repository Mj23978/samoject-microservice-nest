import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("TaskOrderByRelationAggregateInput", {
  isAbstract: true
})
export class TaskOrderByRelationAggregateInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  _count?: "asc" | "desc" | undefined;
}
