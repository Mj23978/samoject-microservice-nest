import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatOrderByWithRelationInput } from "../inputs/ChatOrderByWithRelationInput";
import { ProjectSettingsOrderByWithRelationInput } from "../inputs/ProjectSettingsOrderByWithRelationInput";
import { ProjectsOnUsersOrderByRelationAggregateInput } from "../inputs/ProjectsOnUsersOrderByRelationAggregateInput";
import { SpaceOrderByRelationAggregateInput } from "../inputs/SpaceOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { WorkspaceOrderByWithRelationInput } from "../inputs/WorkspaceOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProjectOrderByWithRelationInput", {
  isAbstract: true
})
export class ProjectOrderByWithRelationInput {
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
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  workspaceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChatOrderByWithRelationInput, {
    nullable: true
  })
  chat?: ChatOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  owner?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsOrderByWithRelationInput, {
    nullable: true
  })
  settings?: ProjectSettingsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceOrderByWithRelationInput, {
    nullable: true
  })
  workspace?: WorkspaceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersOrderByRelationAggregateInput, {
    nullable: true
  })
  users?: ProjectsOnUsersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SpaceOrderByRelationAggregateInput, {
    nullable: true
  })
  spaces?: SpaceOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  tasks?: TaskOrderByRelationAggregateInput | undefined;
}
