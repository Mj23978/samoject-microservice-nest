import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCountOrderByAggregateInput } from "../inputs/WorkspaceCountOrderByAggregateInput";
import { WorkspaceMaxOrderByAggregateInput } from "../inputs/WorkspaceMaxOrderByAggregateInput";
import { WorkspaceMinOrderByAggregateInput } from "../inputs/WorkspaceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WorkspaceOrderByWithAggregationInput", {
  isAbstract: true
})
export class WorkspaceOrderByWithAggregationInput {
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
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WorkspaceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WorkspaceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WorkspaceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WorkspaceMinOrderByAggregateInput | undefined;
}
