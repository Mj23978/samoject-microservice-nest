import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateWithoutAssignesInput } from "../inputs/TaskCreateWithoutAssignesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskCreateOrConnectWithoutAssignesInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutAssignesInput {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskCreateWithoutAssignesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAssignesInput;
}
