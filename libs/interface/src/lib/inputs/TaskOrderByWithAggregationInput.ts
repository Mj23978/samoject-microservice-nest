import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { TaskCountOrderByAggregateInput } from "../inputs/TaskCountOrderByAggregateInput";
import { TaskMaxOrderByAggregateInput } from "../inputs/TaskMaxOrderByAggregateInput";
import { TaskMinOrderByAggregateInput } from "../inputs/TaskMinOrderByAggregateInput";

@InputType("TaskOrderByWithAggregationInput", {
  isAbstract: true
})
export class TaskOrderByWithAggregationInput {
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
  projectId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  creatorId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  details?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @Field(() => TaskCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TaskCountOrderByAggregateInput | undefined;

  @Field(() => TaskMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TaskMaxOrderByAggregateInput | undefined;

  @Field(() => TaskMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TaskMinOrderByAggregateInput | undefined;
}
