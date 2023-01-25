import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutChatInput } from "../inputs/TaskCreateWithoutChatInput";
import { TaskUpdateWithoutChatInput } from "../inputs/TaskUpdateWithoutChatInput";

@InputType("TaskUpsertWithoutChatInput", {
  isAbstract: true
})
export class TaskUpsertWithoutChatInput {
  @Field(() => TaskUpdateWithoutChatInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutChatInput;

  @Field(() => TaskCreateWithoutChatInput, {
    nullable: false
  })
  create!: TaskCreateWithoutChatInput;
}
