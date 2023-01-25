import { WorkspaceCreateManyInput } from "../../../inputs/WorkspaceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWorkspaceArgs {
  @Field(() => [WorkspaceCreateManyInput], {
    nullable: false
  })
  data!: WorkspaceCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
