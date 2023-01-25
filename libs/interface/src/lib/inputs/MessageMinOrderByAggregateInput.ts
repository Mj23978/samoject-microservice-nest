import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("MessageMinOrderByAggregateInput", {
  isAbstract: true
})
export class MessageMinOrderByAggregateInput {
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
}
