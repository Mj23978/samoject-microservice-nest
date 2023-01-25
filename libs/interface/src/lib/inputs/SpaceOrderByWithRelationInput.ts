import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ChatOrderByWithRelationInput } from "../inputs/ChatOrderByWithRelationInput";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { SpaceOrderByRelationAggregateInput } from "../inputs/SpaceOrderByRelationAggregateInput";
import { SpaceSettingsOrderByWithRelationInput } from "../inputs/SpaceSettingsOrderByWithRelationInput";
import { SpaceViewOrderByWithRelationInput } from "../inputs/SpaceViewOrderByWithRelationInput";

@InputType("SpaceOrderByWithRelationInput", {
  isAbstract: true
})
export class SpaceOrderByWithRelationInput {
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
  viewId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  settingsId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  spaceType?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;

  @Field(() => ChatOrderByWithRelationInput, {
    nullable: true
  })
  chat?: ChatOrderByWithRelationInput | undefined;

  @Field(() => SpaceOrderByWithRelationInput, {
    nullable: true
  })
  parent?: SpaceOrderByWithRelationInput | undefined;

  @Field(() => ProjectOrderByWithRelationInput, {
    nullable: true
  })
  project?: ProjectOrderByWithRelationInput | undefined;

  @Field(() => SpaceSettingsOrderByWithRelationInput, {
    nullable: true
  })
  settings?: SpaceSettingsOrderByWithRelationInput | undefined;

  @Field(() => SpaceViewOrderByWithRelationInput, {
    nullable: true
  })
  view?: SpaceViewOrderByWithRelationInput | undefined;

  @Field(() => SpaceOrderByRelationAggregateInput, {
    nullable: true
  })
  subspaces?: SpaceOrderByRelationAggregateInput | undefined;
}
