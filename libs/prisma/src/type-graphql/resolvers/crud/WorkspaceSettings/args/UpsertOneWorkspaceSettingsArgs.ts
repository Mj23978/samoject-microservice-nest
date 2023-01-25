import { WorkspaceSettingsCreateInput } from "../../../inputs/WorkspaceSettingsCreateInput";
import { WorkspaceSettingsUpdateInput } from "../../../inputs/WorkspaceSettingsUpdateInput";
import { WorkspaceSettingsWhereUniqueInput } from "../../../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWorkspaceSettingsArgs {
  @Field(() => WorkspaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceSettingsWhereUniqueInput;

  @Field(() => WorkspaceSettingsCreateInput, {
    nullable: false
  })
  create!: WorkspaceSettingsCreateInput;

  @Field(() => WorkspaceSettingsUpdateInput, {
    nullable: false
  })
  update!: WorkspaceSettingsUpdateInput;
}
