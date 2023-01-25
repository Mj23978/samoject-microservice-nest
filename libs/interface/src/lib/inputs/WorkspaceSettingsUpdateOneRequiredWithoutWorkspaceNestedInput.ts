import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput";
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateWithoutWorkspaceInput";
import { WorkspaceSettingsUpdateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsUpdateWithoutWorkspaceInput";
import { WorkspaceSettingsUpsertWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsUpsertWithoutWorkspaceInput";
import { WorkspaceSettingsWhereUniqueInput } from "../inputs/WorkspaceSettingsWhereUniqueInput";

@InputType("WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput", {
  isAbstract: true
})
export class WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput {
  @Field(() => WorkspaceSettingsCreateWithoutWorkspaceInput, {
    nullable: true
  })
  create?: WorkspaceSettingsCreateWithoutWorkspaceInput | undefined;

  @Field(() => WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput | undefined;

  @Field(() => WorkspaceSettingsUpsertWithoutWorkspaceInput, {
    nullable: true
  })
  upsert?: WorkspaceSettingsUpsertWithoutWorkspaceInput | undefined;

  @Field(() => WorkspaceSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceSettingsWhereUniqueInput | undefined;

  @Field(() => WorkspaceSettingsUpdateWithoutWorkspaceInput, {
    nullable: true
  })
  update?: WorkspaceSettingsUpdateWithoutWorkspaceInput | undefined;
}
