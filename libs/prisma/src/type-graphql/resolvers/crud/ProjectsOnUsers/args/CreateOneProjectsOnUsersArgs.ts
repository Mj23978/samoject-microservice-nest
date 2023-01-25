import { ProjectsOnUsersCreateInput } from "../../../inputs/ProjectsOnUsersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProjectsOnUsersArgs {
  @Field(() => ProjectsOnUsersCreateInput, {
    nullable: false
  })
  data!: ProjectsOnUsersCreateInput;
}
