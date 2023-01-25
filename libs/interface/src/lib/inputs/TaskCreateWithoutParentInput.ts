import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateNestedOneWithoutTaskInput } from "../inputs/ChatCreateNestedOneWithoutTaskInput";
import { ProjectCreateNestedOneWithoutTasksInput } from "../inputs/ProjectCreateNestedOneWithoutTasksInput";
import { TaskCreateNestedManyWithoutParentInput } from "../inputs/TaskCreateNestedManyWithoutParentInput";
import { UserAssignedTasksCreateNestedManyWithoutTaskInput } from "../inputs/UserAssignedTasksCreateNestedManyWithoutTaskInput";
import { UserCreateNestedOneWithoutCreatedTasksInput } from "../inputs/UserCreateNestedOneWithoutCreatedTasksInput";

@InputType("TaskCreateWithoutParentInput", {
  isAbstract: true
})
export class TaskCreateWithoutParentInput {
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

  @Field(() => ProjectCreateNestedOneWithoutTasksInput, {
    nullable: true
  })
  project?: ProjectCreateNestedOneWithoutTasksInput | undefined;

  @Field(() => TaskCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  subTasks?: TaskCreateNestedManyWithoutParentInput | undefined;

  @Field(() => UserAssignedTasksCreateNestedManyWithoutTaskInput, {
    nullable: true
  })
  assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput | undefined;
}
