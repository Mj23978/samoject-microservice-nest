import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateWithoutWorkspaceInput";
import { WorkspaceSettingsUpdateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsUpdateWithoutWorkspaceInput";

@InputType("WorkspaceSettingsUpsertWithoutWorkspaceInput", {
  isAbstract: true
})
export class WorkspaceSettingsUpsertWithoutWorkspaceInput {
  @Field(() => WorkspaceSettingsUpdateWithoutWorkspaceInput, {
    nullable: false
  })
  update!: WorkspaceSettingsUpdateWithoutWorkspaceInput;

  @Field(() => WorkspaceSettingsCreateWithoutWorkspaceInput, {
    nullable: false
  })
  create!: WorkspaceSettingsCreateWithoutWorkspaceInput;
}
