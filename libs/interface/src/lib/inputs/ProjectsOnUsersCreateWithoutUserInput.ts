import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateNestedOneWithoutUsersInput } from "../inputs/ProjectCreateNestedOneWithoutUsersInput";

@InputType("ProjectsOnUsersCreateWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateWithoutUserInput {
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
}
