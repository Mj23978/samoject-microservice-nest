import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ProjectSettingsCountOrderByAggregateInput } from "../inputs/ProjectSettingsCountOrderByAggregateInput";
import { ProjectSettingsMaxOrderByAggregateInput } from "../inputs/ProjectSettingsMaxOrderByAggregateInput";
import { ProjectSettingsMinOrderByAggregateInput } from "../inputs/ProjectSettingsMinOrderByAggregateInput";

@InputType("ProjectSettingsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProjectSettingsOrderByWithAggregationInput {
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
  projectId?: "asc" | "desc" | undefined;

  @Field(() => ProjectSettingsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProjectSettingsCountOrderByAggregateInput | undefined;

  @Field(() => ProjectSettingsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProjectSettingsMaxOrderByAggregateInput | undefined;

  @Field(() => ProjectSettingsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProjectSettingsMinOrderByAggregateInput | undefined;
}
