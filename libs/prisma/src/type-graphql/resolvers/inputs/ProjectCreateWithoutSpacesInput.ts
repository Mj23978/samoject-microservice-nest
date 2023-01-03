import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateNestedOneWithoutProjectInput } from "../inputs/ChatCreateNestedOneWithoutProjectInput";
import { ProjectSettingsCreateNestedOneWithoutProjectInput } from "../inputs/ProjectSettingsCreateNestedOneWithoutProjectInput";
import { ProjectsOnUsersCreateNestedManyWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateNestedManyWithoutProjectInput";
import { TaskCreateNestedManyWithoutProjectInput } from "../inputs/TaskCreateNestedManyWithoutProjectInput";
import { UserCreateNestedOneWithoutOwnedProjectsInput } from "../inputs/UserCreateNestedOneWithoutOwnedProjectsInput";
import { WorkspaceCreateNestedOneWithoutProjectsInput } from "../inputs/WorkspaceCreateNestedOneWithoutProjectsInput";

@TypeGraphQL.InputType("ProjectCreateWithoutSpacesInput", {
  isAbstract: true
})
export class ProjectCreateWithoutSpacesInput {
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
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => ChatCreateNestedOneWithoutProjectInput, {
    nullable: true
  })
  chat?: ChatCreateNestedOneWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOwnedProjectsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutOwnedProjectsInput;

  @TypeGraphQL.Field(_type => ProjectSettingsCreateNestedOneWithoutProjectInput, {
    nullable: false
  })
  settings!: ProjectSettingsCreateNestedOneWithoutProjectInput;

  @TypeGraphQL.Field(_type => WorkspaceCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  workspace!: WorkspaceCreateNestedOneWithoutProjectsInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutProjectInput | undefined;
}
