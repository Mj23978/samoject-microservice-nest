import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateNestedOneWithoutTaskInput } from "../inputs/ChatCreateNestedOneWithoutTaskInput";
import { TaskCreateNestedManyWithoutParentInput } from "../inputs/TaskCreateNestedManyWithoutParentInput";
import { TaskCreateNestedOneWithoutSubTasksInput } from "../inputs/TaskCreateNestedOneWithoutSubTasksInput";
import { UserAssignedTasksCreateNestedManyWithoutTaskInput } from "../inputs/UserAssignedTasksCreateNestedManyWithoutTaskInput";
import { UserCreateNestedOneWithoutCreatedTasksInput } from "../inputs/UserCreateNestedOneWithoutCreatedTasksInput";

@InputType("TaskCreateWithoutProjectInput", {
  isAbstract: true
})
export class TaskCreateWithoutProjectInput {
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
    nullable: true
  })
  status?: string | undefined;

  @Field(() => String, {
    nullable: false
  })
  details!: string;

  @Field(() => ChatCreateNestedOneWithoutTaskInput, {
    nullable: true
  })
  chat?: ChatCreateNestedOneWithoutTaskInput | undefined;

  @Field(() => UserCreateNestedOneWithoutCreatedTasksInput, {
    nullable: true
  })
  creator?: UserCreateNestedOneWithoutCreatedTasksInput | undefined;

  @Field(() => TaskCreateNestedOneWithoutSubTasksInput, {
    nullable: true
  })
  parent?: TaskCreateNestedOneWithoutSubTasksInput | undefined;

  @Field(() => TaskCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  subTasks?: TaskCreateNestedManyWithoutParentInput | undefined;

  @Field(() => UserAssignedTasksCreateNestedManyWithoutTaskInput, {
    nullable: true
  })
  assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput | undefined;
}