import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateNestedOneWithoutTaskInput } from "../inputs/ChatCreateNestedOneWithoutTaskInput";
import { ProjectCreateNestedOneWithoutTasksInput } from "../inputs/ProjectCreateNestedOneWithoutTasksInput";
import { TaskCreateNestedOneWithoutSubTasksInput } from "../inputs/TaskCreateNestedOneWithoutSubTasksInput";
import { UserAssignedTasksCreateNestedManyWithoutTaskInput } from "../inputs/UserAssignedTasksCreateNestedManyWithoutTaskInput";
import { UserCreateNestedOneWithoutCreatedTasksInput } from "../inputs/UserCreateNestedOneWithoutCreatedTasksInput";

@TypeGraphQL.InputType("TaskCreateWithoutSubTasksInput", {
  isAbstract: true
})
export class TaskCreateWithoutSubTasksInput {
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
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  details!: string;

  @TypeGraphQL.Field(_type => ChatCreateNestedOneWithoutTaskInput, {
    nullable: true
  })
  chat?: ChatCreateNestedOneWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedTasksInput, {
    nullable: true
  })
  creator?: UserCreateNestedOneWithoutCreatedTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutSubTasksInput, {
    nullable: true
  })
  parent?: TaskCreateNestedOneWithoutSubTasksInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutTasksInput, {
    nullable: true
  })
  project?: ProjectCreateNestedOneWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateNestedManyWithoutTaskInput, {
    nullable: true
  })
  assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput | undefined;
}
