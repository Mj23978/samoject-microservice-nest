import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { SpaceSettingsCountOrderByAggregateInput } from "../inputs/SpaceSettingsCountOrderByAggregateInput";
import { SpaceSettingsMaxOrderByAggregateInput } from "../inputs/SpaceSettingsMaxOrderByAggregateInput";
import { SpaceSettingsMinOrderByAggregateInput } from "../inputs/SpaceSettingsMinOrderByAggregateInput";

@InputType("SpaceSettingsOrderByWithAggregationInput", {
  isAbstract: true
})
export class SpaceSettingsOrderByWithAggregationInput {
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

  @Field(() => SpaceSettingsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SpaceSettingsCountOrderByAggregateInput | undefined;

  @Field(() => SpaceSettingsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SpaceSettingsMaxOrderByAggregateInput | undefined;

  @Field(() => SpaceSettingsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SpaceSettingsMinOrderByAggregateInput | undefined;
}
