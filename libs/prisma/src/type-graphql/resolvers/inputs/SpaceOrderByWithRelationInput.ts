import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatOrderByWithRelationInput } from "../inputs/ChatOrderByWithRelationInput";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { SpaceOrderByRelationAggregateInput } from "../inputs/SpaceOrderByRelationAggregateInput";
import { SpaceSettingsOrderByWithRelationInput } from "../inputs/SpaceSettingsOrderByWithRelationInput";
import { SpaceViewOrderByWithRelationInput } from "../inputs/SpaceViewOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SpaceOrderByWithRelationInput", {
  isAbstract: true
})
export class SpaceOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ChatOrderByWithRelationInput, {
    nullable: true
  })
  chat?: ChatOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SpaceOrderByWithRelationInput, {
    nullable: true
  })
  parent?: SpaceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByWithRelationInput, {
    nullable: true
  })
  project?: ProjectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsOrderByWithRelationInput, {
    nullable: true
  })
  settings?: SpaceSettingsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewOrderByWithRelationInput, {
    nullable: true
  })
  view?: SpaceViewOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SpaceOrderByRelationAggregateInput, {
    nullable: true
  })
  subspaces?: SpaceOrderByRelationAggregateInput | undefined;
}
