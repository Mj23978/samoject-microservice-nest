import { WorkspaceCreateInput } from "../../../inputs/WorkspaceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWorkspaceArgs {
  @Field(() => WorkspaceCreateInput, {
    nullable: false
  })
  data!: WorkspaceCreateInput;
}
