import { Field, InputType } from "@nestjs/graphql";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyMutationInput } from "../inputs/TaskUpdateManyMutationInput";

@InputType("TaskUpdateManyWithWhereWithoutParentInput", {
  isAbstract: true
})
export class TaskUpdateManyWithWhereWithoutParentInput {
  @Field(() => TaskScalarWhereInput, {
    nullable: false
  })
  where!: TaskScalarWhereInput;

  @Field(() => TaskUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskUpdateManyMutationInput;
}
