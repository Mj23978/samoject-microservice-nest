import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateNestedManyWithoutWorkspaceInput } from "../inputs/ProjectCreateNestedManyWithoutWorkspaceInput";
import { UserCreateNestedOneWithoutWorkspacesInput } from "../inputs/UserCreateNestedOneWithoutWorkspacesInput";

@InputType("WorkspaceCreateWithoutSettingsInput", {
  isAbstract: true
})
export class WorkspaceCreateWithoutSettingsInput {
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

  @Field(() => UserCreateNestedOneWithoutWorkspacesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWorkspacesInput;

  @Field(() => ProjectCreateNestedManyWithoutWorkspaceInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedManyWithoutWorkspaceInput | undefined;
}
