import { Field, InputType } from "@nestjs/graphql";
import { ProjectSettingsWhereInput } from "../inputs/ProjectSettingsWhereInput";

@InputType("ProjectSettingsRelationFilter", {
  isAbstract: true
})
export class ProjectSettingsRelationFilter {
  @Field(() => ProjectSettingsWhereInput, {
    nullable: true
  })
  is?: ProjectSettingsWhereInput | undefined;

  @Field(() => ProjectSettingsWhereInput, {
    nullable: true
  })
  isNot?: ProjectSettingsWhereInput | undefined;
}
