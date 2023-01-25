import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateWithoutSettingsInput } from "../inputs/WorkspaceCreateWithoutSettingsInput";
import { WorkspaceUpdateWithoutSettingsInput } from "../inputs/WorkspaceUpdateWithoutSettingsInput";

@InputType("WorkspaceUpsertWithoutSettingsInput", {
  isAbstract: true
})
export class WorkspaceUpsertWithoutSettingsInput {
  @Field(() => WorkspaceUpdateWithoutSettingsInput, {
    nullable: false
  })
  update!: WorkspaceUpdateWithoutSettingsInput;

  @Field(() => WorkspaceCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutSettingsInput;
}
