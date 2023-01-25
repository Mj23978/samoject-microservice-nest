import { Field, InputType } from "@nestjs/graphql";
import { ProjectSettingsCreateWithoutProjectInput } from "../inputs/ProjectSettingsCreateWithoutProjectInput";
import { ProjectSettingsUpdateWithoutProjectInput } from "../inputs/ProjectSettingsUpdateWithoutProjectInput";

@InputType("ProjectSettingsUpsertWithoutProjectInput", {
  isAbstract: true
})
export class ProjectSettingsUpsertWithoutProjectInput {
  @Field(() => ProjectSettingsUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: ProjectSettingsUpdateWithoutProjectInput;

  @Field(() => ProjectSettingsCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectSettingsCreateWithoutProjectInput;
}
