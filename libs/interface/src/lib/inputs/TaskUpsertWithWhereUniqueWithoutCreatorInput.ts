import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutCreatorInput } from "../inputs/TaskCreateWithoutCreatorInput";
import { TaskUpdateWithoutCreatorInput } from "../inputs/TaskUpdateWithoutCreatorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpsertWithWhereUniqueWithoutCreatorInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutCreatorInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutCreatorInput;

  @Field(() => TaskCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: TaskCreateWithoutCreatorInput;
}
