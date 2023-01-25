import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutTasksInput } from "../inputs/ProjectCreateWithoutTasksInput";
import { ProjectUpdateWithoutTasksInput } from "../inputs/ProjectUpdateWithoutTasksInput";

@InputType("ProjectUpsertWithoutTasksInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutTasksInput {
  @Field(() => ProjectUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutTasksInput;

  @Field(() => ProjectCreateWithoutTasksInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutTasksInput;
}
