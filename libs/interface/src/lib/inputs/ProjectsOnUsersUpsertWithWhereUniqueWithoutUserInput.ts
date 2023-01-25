import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateWithoutUserInput } from "../inputs/ProjectsOnUsersCreateWithoutUserInput";
import { ProjectsOnUsersUpdateWithoutUserInput } from "../inputs/ProjectsOnUsersUpdateWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @Field(() => ProjectsOnUsersUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ProjectsOnUsersUpdateWithoutUserInput;

  @Field(() => ProjectsOnUsersCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateWithoutUserInput;
}
