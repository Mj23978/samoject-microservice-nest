import { Field, InputType } from "@nestjs/graphql";
import { UserCreateNestedOneWithoutWorkspacesInput } from "../inputs/UserCreateNestedOneWithoutWorkspacesInput";
import { WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput";

@InputType("WorkspaceCreateWithoutProjectsInput", {
  isAbstract: true
})
export class WorkspaceCreateWithoutProjectsInput {
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
  title!: string;

  @Field(() => WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput, {
    nullable: false
  })
  settings!: WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput;

  @Field(() => UserCreateNestedOneWithoutWorkspacesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWorkspacesInput;
}
