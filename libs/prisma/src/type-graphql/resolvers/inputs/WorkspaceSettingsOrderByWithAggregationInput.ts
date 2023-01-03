import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceSettingsCountOrderByAggregateInput } from "../inputs/WorkspaceSettingsCountOrderByAggregateInput";
import { WorkspaceSettingsMaxOrderByAggregateInput } from "../inputs/WorkspaceSettingsMaxOrderByAggregateInput";
import { WorkspaceSettingsMinOrderByAggregateInput } from "../inputs/WorkspaceSettingsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WorkspaceSettingsOrderByWithAggregationInput", {
  isAbstract: true
})
export class WorkspaceSettingsOrderByWithAggregationInput {
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
  workspaceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WorkspaceSettingsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WorkspaceSettingsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WorkspaceSettingsMinOrderByAggregateInput | undefined;
}
