import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateNestedOneWithoutUserInput } from "../inputs/ChatCreateNestedOneWithoutUserInput";
import { MessageCreateNestedManyWithoutSenderInput } from "../inputs/MessageCreateNestedManyWithoutSenderInput";
import { ProjectCreateNestedManyWithoutOwnerInput } from "../inputs/ProjectCreateNestedManyWithoutOwnerInput";
import { ProjectsOnUsersCreateNestedManyWithoutUserInput } from "../inputs/ProjectsOnUsersCreateNestedManyWithoutUserInput";
import { UserAssignedTasksCreateNestedManyWithoutUserInput } from "../inputs/UserAssignedTasksCreateNestedManyWithoutUserInput";
import { UserCreateNestedManyWithoutUser_AInput } from "../inputs/UserCreateNestedManyWithoutUser_AInput";
import { UserCreateNestedManyWithoutUser_BInput } from "../inputs/UserCreateNestedManyWithoutUser_BInput";
import { WorkspaceCreateNestedOneWithoutUserInput } from "../inputs/WorkspaceCreateNestedOneWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutCreatedTasksInput", {
  isAbstract: true
})
export class UserCreateWithoutCreatedTasksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstname?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastname?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "ADMIN" | "USER";

  @TypeGraphQL.Field(_type => ChatCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  chat?: ChatCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutSenderInput, {
    nullable: true
  })
  comments?: MessageCreateNestedManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  workspaces?: WorkspaceCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutUser_AInput, {
    nullable: true
  })
  User_B?: UserCreateNestedManyWithoutUser_AInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutUser_BInput, {
    nullable: true
  })
  User_A?: UserCreateNestedManyWithoutUser_BInput | undefined;
}
