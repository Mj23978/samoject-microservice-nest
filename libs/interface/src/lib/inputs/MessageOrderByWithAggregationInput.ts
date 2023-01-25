import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { MessageCountOrderByAggregateInput } from "../inputs/MessageCountOrderByAggregateInput";
import { MessageMaxOrderByAggregateInput } from "../inputs/MessageMaxOrderByAggregateInput";
import { MessageMinOrderByAggregateInput } from "../inputs/MessageMinOrderByAggregateInput";

@InputType("MessageOrderByWithAggregationInput", {
  isAbstract: true
})
export class MessageOrderByWithAggregationInput {
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

  @Field(() => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  contentType?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  senderId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @Field(() => MessageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MessageCountOrderByAggregateInput | undefined;

  @Field(() => MessageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MessageMaxOrderByAggregateInput | undefined;

  @Field(() => MessageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MessageMinOrderByAggregateInput | undefined;
}
