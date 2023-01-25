import { ProjectsOnUsersUpdateManyMutationInput } from "../../../inputs/ProjectsOnUsersUpdateManyMutationInput";
import { ProjectsOnUsersWhereInput } from "../../../inputs/ProjectsOnUsersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectsOnUsersArgs {
  @Field(() => ProjectsOnUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateManyMutationInput;

  @Field(() => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  where?: ProjectsOnUsersWhereInput | undefined;
}
