import { WorkspaceSettingsCreateInput } from "../../../inputs/WorkspaceSettingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWorkspaceSettingsArgs {
  @Field(() => WorkspaceSettingsCreateInput, {
    nullable: false
  })
  data!: WorkspaceSettingsCreateInput;
}
