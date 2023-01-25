import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { WorkspaceSettingsCountOrderByAggregateInput } from "../inputs/WorkspaceSettingsCountOrderByAggregateInput";
import { WorkspaceSettingsMaxOrderByAggregateInput } from "../inputs/WorkspaceSettingsMaxOrderByAggregateInput";
import { WorkspaceSettingsMinOrderByAggregateInput } from "../inputs/WorkspaceSettingsMinOrderByAggregateInput";

@InputType("WorkspaceSettingsOrderByWithAggregationInput", {
  isAbstract: true
})
export class WorkspaceSettingsOrderByWithAggregationInput {
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
  workspaceId?: "asc" | "desc" | undefined;

  @Field(() => WorkspaceSettingsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WorkspaceSettingsCountOrderByAggregateInput | undefined;

  @Field(() => WorkspaceSettingsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WorkspaceSettingsMaxOrderByAggregateInput | undefined;

  @Field(() => WorkspaceSettingsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WorkspaceSettingsMinOrderByAggregateInput | undefined;
}
