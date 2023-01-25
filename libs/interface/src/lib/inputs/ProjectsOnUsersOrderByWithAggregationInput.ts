import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ProjectsOnUsersCountOrderByAggregateInput } from "../inputs/ProjectsOnUsersCountOrderByAggregateInput";
import { ProjectsOnUsersMaxOrderByAggregateInput } from "../inputs/ProjectsOnUsersMaxOrderByAggregateInput";
import { ProjectsOnUsersMinOrderByAggregateInput } from "../inputs/ProjectsOnUsersMinOrderByAggregateInput";

@InputType("ProjectsOnUsersOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProjectsOnUsersOrderByWithAggregationInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  assignedBy?: "asc" | "desc" | undefined;

  @Field(() => ProjectsOnUsersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProjectsOnUsersCountOrderByAggregateInput | undefined;

  @Field(() => ProjectsOnUsersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProjectsOnUsersMaxOrderByAggregateInput | undefined;

  @Field(() => ProjectsOnUsersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProjectsOnUsersMinOrderByAggregateInput | undefined;
}
