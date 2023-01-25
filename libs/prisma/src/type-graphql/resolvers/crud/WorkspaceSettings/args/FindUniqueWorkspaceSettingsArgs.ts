import { WorkspaceSettingsWhereUniqueInput } from "../../../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWorkspaceSettingsArgs {
  @Field(() => WorkspaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceSettingsWhereUniqueInput;
}
