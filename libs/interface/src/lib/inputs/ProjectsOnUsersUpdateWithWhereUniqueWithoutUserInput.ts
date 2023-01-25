import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersUpdateWithoutUserInput } from "../inputs/ProjectsOnUsersUpdateWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @Field(() => ProjectsOnUsersUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateWithoutUserInput;
}
