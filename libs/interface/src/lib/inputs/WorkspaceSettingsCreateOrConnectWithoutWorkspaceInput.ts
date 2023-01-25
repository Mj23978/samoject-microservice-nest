import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateWithoutWorkspaceInput";
import { WorkspaceSettingsWhereUniqueInput } from "../inputs/WorkspaceSettingsWhereUniqueInput";

@InputType("WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput", {
  isAbstract: true
})
export class WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput {
  @Field(() => WorkspaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceSettingsWhereUniqueInput;

  @Field(() => WorkspaceSettingsCreateWithoutWorkspaceInput, {
    nullable: false
  })
  create!: WorkspaceSettingsCreateWithoutWorkspaceInput;
}
