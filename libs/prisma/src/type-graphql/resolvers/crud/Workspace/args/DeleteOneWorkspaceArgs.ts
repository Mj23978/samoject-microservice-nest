import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneWorkspaceArgs {
  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceWhereUniqueInput;
}
