import { Field, InputType } from "@nestjs/graphql";
import { TaskUpdateWithoutParentInput } from "../inputs/TaskUpdateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpdateWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutParentInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskUpdateWithoutParentInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutParentInput;
}
