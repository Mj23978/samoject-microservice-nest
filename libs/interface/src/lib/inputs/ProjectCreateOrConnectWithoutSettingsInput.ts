import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutSettingsInput } from "../inputs/ProjectCreateWithoutSettingsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateOrConnectWithoutSettingsInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutSettingsInput {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutSettingsInput;
}
