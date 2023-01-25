import { WorkspaceUpdateManyMutationInput } from "../../../inputs/WorkspaceUpdateManyMutationInput";
import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWorkspaceArgs {
  @Field(() => WorkspaceUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkspaceUpdateManyMutationInput;

  @Field(() => WorkspaceWhereInput, {
    nullable: true
  })
  where?: WorkspaceWhereInput | undefined;
}
