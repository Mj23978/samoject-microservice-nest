import { WorkspaceUpdateInput } from "../../../inputs/WorkspaceUpdateInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWorkspaceArgs {
  @Field(() => WorkspaceUpdateInput, {
    nullable: false
  })
  data!: WorkspaceUpdateInput;

  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceWhereUniqueInput;
}
