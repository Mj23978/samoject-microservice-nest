import { Field, InputType } from "@nestjs/graphql";
import { TaskUpdateWithoutCreatorInput } from "../inputs/TaskUpdateWithoutCreatorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpdateWithWhereUniqueWithoutCreatorInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutCreatorInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskUpdateWithoutCreatorInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutCreatorInput;
}
