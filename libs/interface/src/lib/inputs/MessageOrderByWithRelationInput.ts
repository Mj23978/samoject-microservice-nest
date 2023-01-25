import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ChatOrderByWithRelationInput } from "../inputs/ChatOrderByWithRelationInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@InputType("MessageOrderByWithRelationInput", {
  isAbstract: true
})
export class MessageOrderByWithRelationInput {
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

  @Field(() => ChatOrderByWithRelationInput, {
    nullable: true
  })
  chat?: ChatOrderByWithRelationInput | undefined;

  @Field(() => MessageOrderByWithRelationInput, {
    nullable: true
  })
  parent?: MessageOrderByWithRelationInput | undefined;

  @Field(() => UserOrderByWithRelationInput, {
    nullable: true
  })
  sender?: UserOrderByWithRelationInput | undefined;

  @Field(() => MessageOrderByRelationAggregateInput, {
    nullable: true
  })
  subMessages?: MessageOrderByRelationAggregateInput | undefined;
}
