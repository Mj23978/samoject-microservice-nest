import { Field, InputType } from "@nestjs/graphql";
import { ProjectSettingsCreateOrConnectWithoutProjectInput } from "../inputs/ProjectSettingsCreateOrConnectWithoutProjectInput";
import { ProjectSettingsCreateWithoutProjectInput } from "../inputs/ProjectSettingsCreateWithoutProjectInput";
import { ProjectSettingsUpdateWithoutProjectInput } from "../inputs/ProjectSettingsUpdateWithoutProjectInput";
import { ProjectSettingsUpsertWithoutProjectInput } from "../inputs/ProjectSettingsUpsertWithoutProjectInput";
import { ProjectSettingsWhereUniqueInput } from "../inputs/ProjectSettingsWhereUniqueInput";

@InputType("ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput", {
  isAbstract: true
})
export class ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput {
  @Field(() => ProjectSettingsCreateWithoutProjectInput, {
    nullable: true
  })
  create?: ProjectSettingsCreateWithoutProjectInput | undefined;

  @Field(() => ProjectSettingsCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: ProjectSettingsCreateOrConnectWithoutProjectInput | undefined;

  @Field(() => ProjectSettingsUpsertWithoutProjectInput, {
    nullable: true
  })
  upsert?: ProjectSettingsUpsertWithoutProjectInput | undefined;

  @Field(() => ProjectSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectSettingsWhereUniqueInput | undefined;

  @Field(() => ProjectSettingsUpdateWithoutProjectInput, {
    nullable: true
  })
  update?: ProjectSettingsUpdateWithoutProjectInput | undefined;
}
