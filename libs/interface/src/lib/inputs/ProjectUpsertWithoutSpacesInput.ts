import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutSpacesInput } from "../inputs/ProjectCreateWithoutSpacesInput";
import { ProjectUpdateWithoutSpacesInput } from "../inputs/ProjectUpdateWithoutSpacesInput";

@InputType("ProjectUpsertWithoutSpacesInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutSpacesInput {
  @Field(() => ProjectUpdateWithoutSpacesInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutSpacesInput;

  @Field(() => ProjectCreateWithoutSpacesInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutSpacesInput;
}
