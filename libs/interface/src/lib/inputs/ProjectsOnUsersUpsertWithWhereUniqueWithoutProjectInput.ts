import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateWithoutProjectInput";
import { ProjectsOnUsersUpdateWithoutProjectInput } from "../inputs/ProjectsOnUsersUpdateWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput {
  @Field(() => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @Field(() => ProjectsOnUsersUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: ProjectsOnUsersUpdateWithoutProjectInput;

  @Field(() => ProjectsOnUsersCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateWithoutProjectInput;
}
