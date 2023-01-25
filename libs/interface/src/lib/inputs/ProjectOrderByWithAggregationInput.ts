import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ProjectCountOrderByAggregateInput } from "../inputs/ProjectCountOrderByAggregateInput";
import { ProjectMaxOrderByAggregateInput } from "../inputs/ProjectMaxOrderByAggregateInput";
import { ProjectMinOrderByAggregateInput } from "../inputs/ProjectMinOrderByAggregateInput";

@InputType("ProjectOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProjectOrderByWithAggregationInput {
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
  description?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  workspaceId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @Field(() => ProjectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProjectCountOrderByAggregateInput | undefined;

  @Field(() => ProjectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProjectMaxOrderByAggregateInput | undefined;

  @Field(() => ProjectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProjectMinOrderByAggregateInput | undefined;
}
