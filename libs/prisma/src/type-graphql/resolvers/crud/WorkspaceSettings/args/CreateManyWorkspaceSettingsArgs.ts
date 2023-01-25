import { WorkspaceSettingsCreateManyInput } from "../../../inputs/WorkspaceSettingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWorkspaceSettingsArgs {
  @Field(() => [WorkspaceSettingsCreateManyInput], {
    nullable: false
  })
  data!: WorkspaceSettingsCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
