import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceViewCountOrderByAggregateInput } from "../inputs/SpaceViewCountOrderByAggregateInput";
import { SpaceViewMaxOrderByAggregateInput } from "../inputs/SpaceViewMaxOrderByAggregateInput";
import { SpaceViewMinOrderByAggregateInput } from "../inputs/SpaceViewMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SpaceViewOrderByWithAggregationInput", {
  isAbstract: true
})
export class SpaceViewOrderByWithAggregationInput {
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
  spaceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SpaceViewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SpaceViewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SpaceViewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SpaceViewMinOrderByAggregateInput | undefined;
}
