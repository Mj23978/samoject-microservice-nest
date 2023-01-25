import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutSettingsInput } from "../inputs/ProjectCreateWithoutSettingsInput";
import { ProjectUpdateWithoutSettingsInput } from "../inputs/ProjectUpdateWithoutSettingsInput";

@InputType("ProjectUpsertWithoutSettingsInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutSettingsInput {
  @Field(() => ProjectUpdateWithoutSettingsInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutSettingsInput;

  @Field(() => ProjectCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutSettingsInput;
}
