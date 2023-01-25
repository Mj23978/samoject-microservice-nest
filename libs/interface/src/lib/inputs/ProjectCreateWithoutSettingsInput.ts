import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateNestedOneWithoutProjectInput } from "../inputs/ChatCreateNestedOneWithoutProjectInput";
import { ProjectsOnUsersCreateNestedManyWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateNestedManyWithoutProjectInput";
import { SpaceCreateNestedManyWithoutProjectInput } from "../inputs/SpaceCreateNestedManyWithoutProjectInput";
import { TaskCreateNestedManyWithoutProjectInput } from "../inputs/TaskCreateNestedManyWithoutProjectInput";
import { UserCreateNestedOneWithoutOwnedProjectsInput } from "../inputs/UserCreateNestedOneWithoutOwnedProjectsInput";
import { WorkspaceCreateNestedOneWithoutProjectsInput } from "../inputs/WorkspaceCreateNestedOneWithoutProjectsInput";

@InputType("ProjectCreateWithoutSettingsInput", {
  isAbstract: true
})
export class ProjectCreateWithoutSettingsInput {
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

  @Field(() => WorkspaceCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  workspace!: WorkspaceCreateNestedOneWithoutProjectsInput;

  @Field(() => ProjectsOnUsersCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput | undefined;

  @Field(() => SpaceCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  spaces?: SpaceCreateNestedManyWithoutProjectInput | undefined;

  @Field(() => TaskCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutProjectInput | undefined;
}
