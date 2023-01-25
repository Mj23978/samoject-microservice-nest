import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutSubTasksInput } from "../inputs/TaskCreateWithoutSubTasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskCreateOrConnectWithoutSubTasksInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutSubTasksInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskCreateWithoutSubTasksInput, {
    nullable: false
  })
  create!: TaskCreateWithoutSubTasksInput;
}
