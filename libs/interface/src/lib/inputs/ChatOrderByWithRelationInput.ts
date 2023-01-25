import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { SpaceOrderByWithRelationInput } from "../inputs/SpaceOrderByWithRelationInput";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@InputType("ChatOrderByWithRelationInput", {
  isAbstract: true
})
export class ChatOrderByWithRelationInput {
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

  @Field(() => MessageOrderByRelationAggregateInput, {
    nullable: true
  })
  messages?: MessageOrderByRelationAggregateInput | undefined;

  @Field(() => ProjectOrderByWithRelationInput, {
    nullable: true
  })
  Project?: ProjectOrderByWithRelationInput | undefined;

  @Field(() => SpaceOrderByWithRelationInput, {
    nullable: true
  })
  Space?: SpaceOrderByWithRelationInput | undefined;

  @Field(() => TaskOrderByWithRelationInput, {
    nullable: true
  })
  Task?: TaskOrderByWithRelationInput | undefined;

  @Field(() => UserOrderByWithRelationInput, {
    nullable: true
  })
  User?: UserOrderByWithRelationInput | undefined;
}
