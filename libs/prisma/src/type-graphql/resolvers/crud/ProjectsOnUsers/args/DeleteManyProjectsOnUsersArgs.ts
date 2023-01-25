import { ProjectsOnUsersWhereInput } from "../../../inputs/ProjectsOnUsersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectsOnUsersArgs {
  @Field(() => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  where?: ProjectsOnUsersWhereInput | undefined;
}
