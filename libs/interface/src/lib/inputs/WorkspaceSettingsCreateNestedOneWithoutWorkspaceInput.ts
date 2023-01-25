import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput";
import { WorkspaceSettingsCreateWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateWithoutWorkspaceInput";
import { WorkspaceSettingsWhereUniqueInput } from "../inputs/WorkspaceSettingsWhereUniqueInput";

@InputType("WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput", {
  isAbstract: true
})
export class WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput {
  @Field(() => WorkspaceSettingsCreateWithoutWorkspaceInput, {
    nullable: true
  })
  create?: WorkspaceSettingsCreateWithoutWorkspaceInput | undefined;

  @Field(() => WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput | undefined;

  @Field(() => WorkspaceSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceSettingsWhereUniqueInput | undefined;
}
