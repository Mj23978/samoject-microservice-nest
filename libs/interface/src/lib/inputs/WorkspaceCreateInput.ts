import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateNestedManyWithoutWorkspaceInput } from "../inputs/ProjectCreateNestedManyWithoutWorkspaceInput";
import { UserCreateNestedOneWithoutWorkspacesInput } from "../inputs/UserCreateNestedOneWithoutWorkspacesInput";
import { WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput";

@InputType("WorkspaceCreateInput", {
  isAbstract: true
})
export class WorkspaceCreateInput {
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

  @Field(() => ProjectCreateNestedManyWithoutWorkspaceInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedManyWithoutWorkspaceInput | undefined;
}
