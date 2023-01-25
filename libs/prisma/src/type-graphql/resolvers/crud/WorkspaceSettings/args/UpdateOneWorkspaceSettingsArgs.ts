import { WorkspaceSettingsUpdateInput } from "../../../inputs/WorkspaceSettingsUpdateInput";
import { WorkspaceSettingsWhereUniqueInput } from "../../../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWorkspaceSettingsArgs {
  @Field(() => WorkspaceSettingsUpdateInput, {
    nullable: false
  })
  data!: WorkspaceSettingsUpdateInput;

  @Field(() => WorkspaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceSettingsWhereUniqueInput;
}
