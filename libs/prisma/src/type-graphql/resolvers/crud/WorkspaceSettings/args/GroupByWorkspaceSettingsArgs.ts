import { WorkspaceSettingsScalarFieldEnum } from "../../../../enums/WorkspaceSettingsScalarFieldEnum";
import { WorkspaceSettingsOrderByWithAggregationInput } from "../../../inputs/WorkspaceSettingsOrderByWithAggregationInput";
import { WorkspaceSettingsScalarWhereWithAggregatesInput } from "../../../inputs/WorkspaceSettingsScalarWhereWithAggregatesInput";
import { WorkspaceSettingsWhereInput } from "../../../inputs/WorkspaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByWorkspaceSettingsArgs {
  @Field(() => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  where?: WorkspaceSettingsWhereInput | undefined;

  @Field(() => [WorkspaceSettingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WorkspaceSettingsOrderByWithAggregationInput[] | undefined;

  @Field(() => [WorkspaceSettingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "localId" | "workspaceId">;

  @Field(() => WorkspaceSettingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WorkspaceSettingsScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
