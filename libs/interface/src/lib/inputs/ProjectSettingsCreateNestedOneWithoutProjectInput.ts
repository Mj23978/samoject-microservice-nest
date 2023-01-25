import { Field, InputType } from "@nestjs/graphql";
import { ProjectSettingsCreateOrConnectWithoutProjectInput } from "../inputs/ProjectSettingsCreateOrConnectWithoutProjectInput";
import { ProjectSettingsCreateWithoutProjectInput } from "../inputs/ProjectSettingsCreateWithoutProjectInput";
import { ProjectSettingsWhereUniqueInput } from "../inputs/ProjectSettingsWhereUniqueInput";

@InputType("ProjectSettingsCreateNestedOneWithoutProjectInput", {
  isAbstract: true
})
export class ProjectSettingsCreateNestedOneWithoutProjectInput {
  @Field(() => ProjectSettingsCreateWithoutProjectInput, {
    nullable: true
  })
  create?: ProjectSettingsCreateWithoutProjectInput | undefined;

  @Field(() => ProjectSettingsCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: ProjectSettingsCreateOrConnectWithoutProjectInput | undefined;

  @Field(() => ProjectSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectSettingsWhereUniqueInput | undefined;
}
