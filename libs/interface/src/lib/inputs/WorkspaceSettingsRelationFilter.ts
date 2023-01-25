import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceSettingsWhereInput } from "../inputs/WorkspaceSettingsWhereInput";

@InputType("WorkspaceSettingsRelationFilter", {
  isAbstract: true
})
export class WorkspaceSettingsRelationFilter {
  @Field(() => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  is?: WorkspaceSettingsWhereInput | undefined;

  @Field(() => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  isNot?: WorkspaceSettingsWhereInput | undefined;
}
