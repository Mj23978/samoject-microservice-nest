import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutSubTasksInput } from "../inputs/TaskCreateWithoutSubTasksInput";
import { TaskUpdateWithoutSubTasksInput } from "../inputs/TaskUpdateWithoutSubTasksInput";

@InputType("TaskUpsertWithoutSubTasksInput", {
  isAbstract: true
})
export class TaskUpsertWithoutSubTasksInput {
  @Field(() => TaskUpdateWithoutSubTasksInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutSubTasksInput;

  @Field(() => TaskCreateWithoutSubTasksInput, {
    nullable: false
  })
  create!: TaskCreateWithoutSubTasksInput;
}
