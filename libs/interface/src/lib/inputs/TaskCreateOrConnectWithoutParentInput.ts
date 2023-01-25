import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskCreateOrConnectWithoutParentInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutParentInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskCreateWithoutParentInput, {
    nullable: false
  })
  create!: TaskCreateWithoutParentInput;
}
