import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateNestedOneWithoutSettingsInput } from "../inputs/WorkspaceCreateNestedOneWithoutSettingsInput";

@InputType("WorkspaceSettingsCreateInput", {
  isAbstract: true
})
export class WorkspaceSettingsCreateInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  workspaceId!: string;

  @Field(() => WorkspaceCreateNestedOneWithoutSettingsInput, {
    nullable: true
  })
  workspace?: WorkspaceCreateNestedOneWithoutSettingsInput | undefined;
}
