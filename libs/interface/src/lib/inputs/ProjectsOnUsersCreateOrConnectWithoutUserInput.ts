import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateWithoutUserInput } from "../inputs/ProjectsOnUsersCreateWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateOrConnectWithoutUserInput {
  @Field(() => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @Field(() => ProjectsOnUsersCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateWithoutUserInput;
}
