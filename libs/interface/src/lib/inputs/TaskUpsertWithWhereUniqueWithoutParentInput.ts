import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskUpdateWithoutParentInput } from "../inputs/TaskUpdateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutParentInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskUpdateWithoutParentInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutParentInput;

  @Field(() => TaskCreateWithoutParentInput, {
    nullable: false
  })
  create!: TaskCreateWithoutParentInput;
}
