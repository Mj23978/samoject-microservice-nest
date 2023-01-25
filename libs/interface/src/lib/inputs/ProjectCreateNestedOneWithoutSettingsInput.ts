import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutSettingsInput } from "../inputs/ProjectCreateOrConnectWithoutSettingsInput";
import { ProjectCreateWithoutSettingsInput } from "../inputs/ProjectCreateWithoutSettingsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateNestedOneWithoutSettingsInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutSettingsInput {
  @Field(() => ProjectCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutSettingsInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
