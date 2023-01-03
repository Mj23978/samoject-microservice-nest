import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCountOrderByAggregateInput } from "../inputs/SpaceCountOrderByAggregateInput";
import { SpaceMaxOrderByAggregateInput } from "../inputs/SpaceMaxOrderByAggregateInput";
import { SpaceMinOrderByAggregateInput } from "../inputs/SpaceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SpaceOrderByWithAggregationInput", {
  isAbstract: true
})
export class SpaceOrderByWithAggregationInput {
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
  viewId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  spaceType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SpaceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SpaceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpaceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SpaceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpaceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SpaceMinOrderByAggregateInput | undefined;
}
