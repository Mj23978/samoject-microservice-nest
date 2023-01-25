import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { SpaceViewCountOrderByAggregateInput } from "../inputs/SpaceViewCountOrderByAggregateInput";
import { SpaceViewMaxOrderByAggregateInput } from "../inputs/SpaceViewMaxOrderByAggregateInput";
import { SpaceViewMinOrderByAggregateInput } from "../inputs/SpaceViewMinOrderByAggregateInput";

@InputType("SpaceViewOrderByWithAggregationInput", {
  isAbstract: true
})
export class SpaceViewOrderByWithAggregationInput {
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
  localId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  spaceId?: "asc" | "desc" | undefined;

  @Field(() => SpaceViewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SpaceViewCountOrderByAggregateInput | undefined;

  @Field(() => SpaceViewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SpaceViewMaxOrderByAggregateInput | undefined;

  @Field(() => SpaceViewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SpaceViewMinOrderByAggregateInput | undefined;
}
