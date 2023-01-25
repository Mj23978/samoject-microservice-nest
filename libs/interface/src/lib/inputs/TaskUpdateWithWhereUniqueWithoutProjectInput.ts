import { Field, InputType } from "@nestjs/graphql";
import { TaskUpdateWithoutProjectInput } from "../inputs/TaskUpdateWithoutProjectInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutProjectInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutProjectInput;
}
