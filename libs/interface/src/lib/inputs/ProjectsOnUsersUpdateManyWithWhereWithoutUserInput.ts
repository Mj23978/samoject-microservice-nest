import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersScalarWhereInput } from "../inputs/ProjectsOnUsersScalarWhereInput";
import { ProjectsOnUsersUpdateManyMutationInput } from "../inputs/ProjectsOnUsersUpdateManyMutationInput";

@InputType("ProjectsOnUsersUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateManyWithWhereWithoutUserInput {
  @Field(() => ProjectsOnUsersScalarWhereInput, {
    nullable: false
  })
  where!: ProjectsOnUsersScalarWhereInput;

  @Field(() => ProjectsOnUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateManyMutationInput;
}
