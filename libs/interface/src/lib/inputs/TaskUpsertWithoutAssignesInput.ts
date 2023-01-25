import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutAssignesInput } from "../inputs/TaskCreateWithoutAssignesInput";
import { TaskUpdateWithoutAssignesInput } from "../inputs/TaskUpdateWithoutAssignesInput";

@InputType("TaskUpsertWithoutAssignesInput", {
  isAbstract: true
})
export class TaskUpsertWithoutAssignesInput {
  @Field(() => TaskUpdateWithoutAssignesInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutAssignesInput;

  @Field(() => TaskCreateWithoutAssignesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAssignesInput;
}
