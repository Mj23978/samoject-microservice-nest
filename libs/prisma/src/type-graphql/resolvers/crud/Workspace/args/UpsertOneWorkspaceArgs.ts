import { WorkspaceCreateInput } from "../../../inputs/WorkspaceCreateInput";
import { WorkspaceUpdateInput } from "../../../inputs/WorkspaceUpdateInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWorkspaceArgs {
  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceWhereUniqueInput;

  @Field(() => WorkspaceCreateInput, {
    nullable: false
  })
  create!: WorkspaceCreateInput;

  @Field(() => WorkspaceUpdateInput, {
    nullable: false
  })
  update!: WorkspaceUpdateInput;
}
