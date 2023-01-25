import { ProjectsOnUsersCreateInput } from "../../../inputs/ProjectsOnUsersCreateInput";
import { ProjectsOnUsersUpdateInput } from "../../../inputs/ProjectsOnUsersUpdateInput";
import { ProjectsOnUsersWhereUniqueInput } from "../../../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProjectsOnUsersArgs {
  @Field(() => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @Field(() => ProjectsOnUsersCreateInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateInput;

  @Field(() => ProjectsOnUsersUpdateInput, {
    nullable: false
  })
  update!: ProjectsOnUsersUpdateInput;
}
