import { Field, InputType } from "@nestjs/graphql";
import { ProjectSettingsCreateWithoutProjectInput } from "../inputs/ProjectSettingsCreateWithoutProjectInput";
import { ProjectSettingsWhereUniqueInput } from "../inputs/ProjectSettingsWhereUniqueInput";

@InputType("ProjectSettingsCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class ProjectSettingsCreateOrConnectWithoutProjectInput {
  @Field(() => ProjectSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectSettingsWhereUniqueInput;

  @Field(() => ProjectSettingsCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectSettingsCreateWithoutProjectInput;
}
