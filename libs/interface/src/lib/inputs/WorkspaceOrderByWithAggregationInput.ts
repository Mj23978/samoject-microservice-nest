import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { WorkspaceCountOrderByAggregateInput } from "../inputs/WorkspaceCountOrderByAggregateInput";
import { WorkspaceMaxOrderByAggregateInput } from "../inputs/WorkspaceMaxOrderByAggregateInput";
import { WorkspaceMinOrderByAggregateInput } from "../inputs/WorkspaceMinOrderByAggregateInput";

@InputType("WorkspaceOrderByWithAggregationInput", {
  isAbstract: true
})
export class WorkspaceOrderByWithAggregationInput {
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
  title?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @Field(() => WorkspaceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WorkspaceCountOrderByAggregateInput | undefined;

  @Field(() => WorkspaceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WorkspaceMaxOrderByAggregateInput | undefined;

  @Field(() => WorkspaceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WorkspaceMinOrderByAggregateInput | undefined;
}
