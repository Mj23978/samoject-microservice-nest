import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { SpaceCountOrderByAggregateInput } from "../inputs/SpaceCountOrderByAggregateInput";
import { SpaceMaxOrderByAggregateInput } from "../inputs/SpaceMaxOrderByAggregateInput";
import { SpaceMinOrderByAggregateInput } from "../inputs/SpaceMinOrderByAggregateInput";

@InputType("SpaceOrderByWithAggregationInput", {
  isAbstract: true
})
export class SpaceOrderByWithAggregationInput {
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
  viewId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  spaceType?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @Field(() => SpaceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SpaceCountOrderByAggregateInput | undefined;

  @Field(() => SpaceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SpaceMaxOrderByAggregateInput | undefined;

  @Field(() => SpaceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SpaceMinOrderByAggregateInput | undefined;
}
