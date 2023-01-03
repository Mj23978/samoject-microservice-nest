import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceSettingsCountOrderByAggregateInput } from "../inputs/SpaceSettingsCountOrderByAggregateInput";
import { SpaceSettingsMaxOrderByAggregateInput } from "../inputs/SpaceSettingsMaxOrderByAggregateInput";
import { SpaceSettingsMinOrderByAggregateInput } from "../inputs/SpaceSettingsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SpaceSettingsOrderByWithAggregationInput", {
  isAbstract: true
})
export class SpaceSettingsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SpaceSettingsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SpaceSettingsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SpaceSettingsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SpaceSettingsMinOrderByAggregateInput | undefined;
}
