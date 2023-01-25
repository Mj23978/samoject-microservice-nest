import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateOrConnectWithoutSettingsInput } from "../inputs/WorkspaceCreateOrConnectWithoutSettingsInput";
import { WorkspaceCreateWithoutSettingsInput } from "../inputs/WorkspaceCreateWithoutSettingsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@InputType("WorkspaceCreateNestedOneWithoutSettingsInput", {
  isAbstract: true
})
export class WorkspaceCreateNestedOneWithoutSettingsInput {
  @Field(() => WorkspaceCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutSettingsInput | undefined;

  @Field(() => WorkspaceCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput | undefined;

  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;
}
