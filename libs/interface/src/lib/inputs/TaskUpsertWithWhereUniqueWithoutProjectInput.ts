import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutProjectInput } from "../inputs/TaskCreateWithoutProjectInput";
import { TaskUpdateWithoutProjectInput } from "../inputs/TaskUpdateWithoutProjectInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutProjectInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutProjectInput;

  @Field(() => TaskCreateWithoutProjectInput, {
    nullable: false
  })
  create!: TaskCreateWithoutProjectInput;
}
