import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateNestedOneWithoutProjectInput } from "../inputs/ChatCreateNestedOneWithoutProjectInput";
import { ProjectSettingsCreateNestedOneWithoutProjectInput } from "../inputs/ProjectSettingsCreateNestedOneWithoutProjectInput";
import { ProjectsOnUsersCreateNestedManyWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateNestedManyWithoutProjectInput";
import { TaskCreateNestedManyWithoutProjectInput } from "../inputs/TaskCreateNestedManyWithoutProjectInput";
import { UserCreateNestedOneWithoutOwnedProjectsInput } from "../inputs/UserCreateNestedOneWithoutOwnedProjectsInput";
import { WorkspaceCreateNestedOneWithoutProjectsInput } from "../inputs/WorkspaceCreateNestedOneWithoutProjectsInput";

@InputType("ProjectCreateWithoutSpacesInput", {
  isAbstract: true
})
export class ProjectCreateWithoutSpacesInput {
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

  @Field(() => String, {
    nullable: true
  })
  description?: string | undefined;

  @Field(() => ChatCreateNestedOneWithoutProjectInput, {
    nullable: true
  })
  chat?: ChatCreateNestedOneWithoutProjectInput | undefined;

  @Field(() => UserCreateNestedOneWithoutOwnedProjectsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutOwnedProjectsInput;

  @Field(() => ProjectSettingsCreateNestedOneWithoutProjectInput, {
    nullable: false
  })
  settings!: ProjectSettingsCreateNestedOneWithoutProjectInput;

  @Field(() => WorkspaceCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  workspace!: WorkspaceCreateNestedOneWithoutProjectsInput;

  @Field(() => ProjectsOnUsersCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput | undefined;

  @Field(() => TaskCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutProjectInput | undefined;
}
