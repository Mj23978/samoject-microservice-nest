import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ChatOrderByWithRelationInput } from "../inputs/ChatOrderByWithRelationInput";
import { ProjectSettingsOrderByWithRelationInput } from "../inputs/ProjectSettingsOrderByWithRelationInput";
import { ProjectsOnUsersOrderByRelationAggregateInput } from "../inputs/ProjectsOnUsersOrderByRelationAggregateInput";
import { SpaceOrderByRelationAggregateInput } from "../inputs/SpaceOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { WorkspaceOrderByWithRelationInput } from "../inputs/WorkspaceOrderByWithRelationInput";

@InputType("ProjectOrderByWithRelationInput", {
  isAbstract: true
})
export class ProjectOrderByWithRelationInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  workspaceId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @Field(() => ChatOrderByWithRelationInput, {
    nullable: true
  })
  chat?: ChatOrderByWithRelationInput | undefined;

  @Field(() => UserOrderByWithRelationInput, {
    nullable: true
  })
  owner?: UserOrderByWithRelationInput | undefined;

  @Field(() => ProjectSettingsOrderByWithRelationInput, {
    nullable: true
  })
  settings?: ProjectSettingsOrderByWithRelationInput | undefined;

  @Field(() => WorkspaceOrderByWithRelationInput, {
    nullable: true
  })
  workspace?: WorkspaceOrderByWithRelationInput | undefined;

  @Field(() => ProjectsOnUsersOrderByRelationAggregateInput, {
    nullable: true
  })
  users?: ProjectsOnUsersOrderByRelationAggregateInput | undefined;

  @Field(() => SpaceOrderByRelationAggregateInput, {
    nullable: true
  })
  spaces?: SpaceOrderByRelationAggregateInput | undefined;

  @Field(() => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  tasks?: TaskOrderByRelationAggregateInput | undefined;
}
