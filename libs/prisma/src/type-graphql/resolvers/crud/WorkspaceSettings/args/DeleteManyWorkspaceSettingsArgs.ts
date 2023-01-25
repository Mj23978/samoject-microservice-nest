import { WorkspaceSettingsWhereInput } from "../../../inputs/WorkspaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWorkspaceSettingsArgs {
  @Field(() => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  where?: WorkspaceSettingsWhereInput | undefined;
}
