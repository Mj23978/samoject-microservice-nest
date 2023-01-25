import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("UserOrderByRelationAggregateInput", {
  isAbstract: true
})
export class UserOrderByRelationAggregateInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  _count?: "asc" | "desc" | undefined;
}
