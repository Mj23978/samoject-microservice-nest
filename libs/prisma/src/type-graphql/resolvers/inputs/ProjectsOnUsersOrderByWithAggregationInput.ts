import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCountOrderByAggregateInput } from "../inputs/ProjectsOnUsersCountOrderByAggregateInput";
import { ProjectsOnUsersMaxOrderByAggregateInput } from "../inputs/ProjectsOnUsersMaxOrderByAggregateInput";
import { ProjectsOnUsersMinOrderByAggregateInput } from "../inputs/ProjectsOnUsersMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProjectsOnUsersOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProjectsOnUsersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedBy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProjectsOnUsersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProjectsOnUsersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProjectsOnUsersMinOrderByAggregateInput | undefined;
}
