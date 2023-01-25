import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ChatCountOrderByAggregateInput } from "../inputs/ChatCountOrderByAggregateInput";
import { ChatMaxOrderByAggregateInput } from "../inputs/ChatMaxOrderByAggregateInput";
import { ChatMinOrderByAggregateInput } from "../inputs/ChatMinOrderByAggregateInput";

@InputType("ChatOrderByWithAggregationInput", {
  isAbstract: true
})
export class ChatOrderByWithAggregationInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @Field(() => ChatCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChatCountOrderByAggregateInput | undefined;

  @Field(() => ChatMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChatMaxOrderByAggregateInput | undefined;

  @Field(() => ChatMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChatMinOrderByAggregateInput | undefined;
}
