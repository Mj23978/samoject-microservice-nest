import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWorkspaceArgs {
  @Field(() => WorkspaceWhereInput, {
    nullable: true
  })
  where?: WorkspaceWhereInput | undefined;
}
