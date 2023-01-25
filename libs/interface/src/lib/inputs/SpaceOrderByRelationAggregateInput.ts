import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("SpaceOrderByRelationAggregateInput", {
  isAbstract: true
})
export class SpaceOrderByRelationAggregateInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  _count?: "asc" | "desc" | undefined;
}
