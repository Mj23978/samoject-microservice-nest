import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { WorkspaceOrderByWithRelationInput } from "../inputs/WorkspaceOrderByWithRelationInput";

@InputType("WorkspaceSettingsOrderByWithRelationInput", {
  isAbstract: true
})
export class WorkspaceSettingsOrderByWithRelationInput {
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
  localId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  workspaceId?: "asc" | "desc" | undefined;

  @Field(() => WorkspaceOrderByWithRelationInput, {
    nullable: true
  })
  workspace?: WorkspaceOrderByWithRelationInput | undefined;
}
