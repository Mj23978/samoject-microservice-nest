import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutSettingsInput } from "../inputs/ProjectCreateOrConnectWithoutSettingsInput";
import { ProjectCreateWithoutSettingsInput } from "../inputs/ProjectCreateWithoutSettingsInput";
import { ProjectUpdateWithoutSettingsInput } from "../inputs/ProjectUpdateWithoutSettingsInput";
import { ProjectUpsertWithoutSettingsInput } from "../inputs/ProjectUpsertWithoutSettingsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpdateOneWithoutSettingsNestedInput", {
  isAbstract: true
})
export class ProjectUpdateOneWithoutSettingsNestedInput {
  @Field(() => ProjectCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutSettingsInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput | undefined;

  @Field(() => ProjectUpsertWithoutSettingsInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutSettingsInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @Field(() => ProjectUpdateWithoutSettingsInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutSettingsInput | undefined;
}
