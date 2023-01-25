import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateWithoutSettingsInput } from "../inputs/WorkspaceCreateWithoutSettingsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@InputType("WorkspaceCreateOrConnectWithoutSettingsInput", {
  isAbstract: true
})
export class WorkspaceCreateOrConnectWithoutSettingsInput {
  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceWhereUniqueInput;

  @Field(() => WorkspaceCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutSettingsInput;
}
