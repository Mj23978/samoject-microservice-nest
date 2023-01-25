import { ProjectsOnUsersUpdateInput } from "../../../inputs/ProjectsOnUsersUpdateInput";
import { ProjectsOnUsersWhereUniqueInput } from "../../../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProjectsOnUsersArgs {
  @Field(() => ProjectsOnUsersUpdateInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateInput;

  @Field(() => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;
}
