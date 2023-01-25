import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersUpdateWithoutProjectInput } from "../inputs/ProjectsOnUsersUpdateWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput {
  @Field(() => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @Field(() => ProjectsOnUsersUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateWithoutProjectInput;
}
