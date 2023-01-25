import { ProjectsOnUsersCreateManyInput } from "../../../inputs/ProjectsOnUsersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectsOnUsersArgs {
  @Field(() => [ProjectsOnUsersCreateManyInput], {
    nullable: false
  })
  data!: ProjectsOnUsersCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
