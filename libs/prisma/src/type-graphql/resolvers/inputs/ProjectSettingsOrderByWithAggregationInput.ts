import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectSettingsCountOrderByAggregateInput } from "../inputs/ProjectSettingsCountOrderByAggregateInput";
import { ProjectSettingsMaxOrderByAggregateInput } from "../inputs/ProjectSettingsMaxOrderByAggregateInput";
import { ProjectSettingsMinOrderByAggregateInput } from "../inputs/ProjectSettingsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProjectSettingsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProjectSettingsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  localId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProjectSettingsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProjectSettingsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProjectSettingsMinOrderByAggregateInput | undefined;
}
