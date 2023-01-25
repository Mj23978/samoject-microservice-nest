import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersScalarWhereInput } from "../inputs/ProjectsOnUsersScalarWhereInput";
import { ProjectsOnUsersUpdateManyMutationInput } from "../inputs/ProjectsOnUsersUpdateManyMutationInput";

@InputType("ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput {
  @Field(() => ProjectsOnUsersScalarWhereInput, {
    nullable: false
  })
  where!: ProjectsOnUsersScalarWhereInput;

  @Field(() => ProjectsOnUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateManyMutationInput;
}
