import { Field, InputType } from "@nestjs/graphql";
import { Role } from "../enums/Role";
import { ChatCreateNestedOneWithoutUserInput } from "../inputs/ChatCreateNestedOneWithoutUserInput";
import { MessageCreateNestedManyWithoutSenderInput } from "../inputs/MessageCreateNestedManyWithoutSenderInput";
import { ProjectCreateNestedManyWithoutOwnerInput } from "../inputs/ProjectCreateNestedManyWithoutOwnerInput";
import { ProjectsOnUsersCreateNestedManyWithoutUserInput } from "../inputs/ProjectsOnUsersCreateNestedManyWithoutUserInput";
import { TaskCreateNestedManyWithoutCreatorInput } from "../inputs/TaskCreateNestedManyWithoutCreatorInput";
import { UserCreateNestedManyWithoutUser_AInput } from "../inputs/UserCreateNestedManyWithoutUser_AInput";
import { UserCreateNestedManyWithoutUser_BInput } from "../inputs/UserCreateNestedManyWithoutUser_BInput";
import { WorkspaceCreateNestedOneWithoutUserInput } from "../inputs/WorkspaceCreateNestedOneWithoutUserInput";

@InputType("UserCreateWithoutAssignedTasksInput", {
  isAbstract: true
})
export class UserCreateWithoutAssignedTasksInput {
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
  email!: string;

  @Field(() => String, {
    nullable: false
  })
  password!: string;

  @Field(() => String, {
    nullable: true
  })
  firstname?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  lastname?: string | undefined;

  @Field(() => String, {
    nullable: false
  })
  username!: string;

  @Field(() => Boolean, {
    nullable: false
  })
  active!: boolean;

  @Field(() => Role, {
    nullable: false
  })
  role!: "ADMIN" | "USER";

  @Field(() => ChatCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  chat?: ChatCreateNestedOneWithoutUserInput | undefined;

  @Field(() => MessageCreateNestedManyWithoutSenderInput, {
    nullable: true
  })
  comments?: MessageCreateNestedManyWithoutSenderInput | undefined;

  @Field(() => ProjectCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput | undefined;

  @Field(() => ProjectsOnUsersCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput | undefined;

  @Field(() => TaskCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  createdTasks?: TaskCreateNestedManyWithoutCreatorInput | undefined;

  @Field(() => WorkspaceCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  workspaces?: WorkspaceCreateNestedOneWithoutUserInput | undefined;

  @Field(() => UserCreateNestedManyWithoutUser_AInput, {
    nullable: true
  })
  User_B?: UserCreateNestedManyWithoutUser_AInput | undefined;

  @Field(() => UserCreateNestedManyWithoutUser_BInput, {
    nullable: true
  })
  User_A?: UserCreateNestedManyWithoutUser_BInput | undefined;
}