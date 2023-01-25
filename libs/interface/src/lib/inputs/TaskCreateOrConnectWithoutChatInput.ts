import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutChatInput } from "../inputs/TaskCreateWithoutChatInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskCreateOrConnectWithoutChatInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutChatInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskCreateWithoutChatInput, {
    nullable: false
  })
  create!: TaskCreateWithoutChatInput;
}
