import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ProjectOrderByRelationAggregateInput } from "../inputs/ProjectOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { WorkspaceSettingsOrderByWithRelationInput } from "../inputs/WorkspaceSettingsOrderByWithRelationInput";

@InputType("WorkspaceOrderByWithRelationInput", {
  isAbstract: true
})
export class WorkspaceOrderByWithRelationInput {
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
  settingsId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @Field(() => WorkspaceSettingsOrderByWithRelationInput, {
    nullable: true
  })
  settings?: WorkspaceSettingsOrderByWithRelationInput | undefined;

  @Field(() => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @Field(() => ProjectOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: ProjectOrderByRelationAggregateInput | undefined;
}
