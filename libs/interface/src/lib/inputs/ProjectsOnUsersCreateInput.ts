import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateNestedOneWithoutUsersInput } from "../inputs/ProjectCreateNestedOneWithoutUsersInput";
import { UserCreateNestedOneWithoutProjectsInput } from "../inputs/UserCreateNestedOneWithoutProjectsInput";

@InputType("ProjectsOnUsersCreateInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateInput {
  @Field(() => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;

  @Field(() => ProjectCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutUsersInput;

  @Field(() => UserCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProjectsInput;
}
