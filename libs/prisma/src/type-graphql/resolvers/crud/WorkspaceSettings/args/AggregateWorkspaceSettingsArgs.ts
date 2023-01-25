import { WorkspaceSettingsOrderByWithRelationInput } from "../../../inputs/WorkspaceSettingsOrderByWithRelationInput";
import { WorkspaceSettingsWhereInput } from "../../../inputs/WorkspaceSettingsWhereInput";
import { WorkspaceSettingsWhereUniqueInput } from "../../../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWorkspaceSettingsArgs {
  @Field(() => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  where?: WorkspaceSettingsWhereInput | undefined;

  @Field(() => [WorkspaceSettingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WorkspaceSettingsOrderByWithRelationInput[] | undefined;

  @Field(() => WorkspaceSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: WorkspaceSettingsWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
