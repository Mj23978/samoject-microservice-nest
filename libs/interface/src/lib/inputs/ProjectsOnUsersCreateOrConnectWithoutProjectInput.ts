import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateOrConnectWithoutProjectInput {
  @Field(() => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @Field(() => ProjectsOnUsersCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateWithoutProjectInput;
}
