import { WorkspaceSettingsUpdateManyMutationInput } from "../../../inputs/WorkspaceSettingsUpdateManyMutationInput";
import { WorkspaceSettingsWhereInput } from "../../../inputs/WorkspaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWorkspaceSettingsArgs {
  @Field(() => WorkspaceSettingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkspaceSettingsUpdateManyMutationInput;

  @Field(() => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  where?: WorkspaceSettingsWhereInput | undefined;
}
