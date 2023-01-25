import { Field, InputType } from "@nestjs/graphql";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyMutationInput } from "../inputs/TaskUpdateManyMutationInput";

@InputType("TaskUpdateManyWithWhereWithoutCreatorInput", {
  isAbstract: true
})
export class TaskUpdateManyWithWhereWithoutCreatorInput {
  @Field(() => TaskScalarWhereInput, {
    nullable: false
  })
  where!: TaskScalarWhereInput;

  @Field(() => TaskUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskUpdateManyMutationInput;
}
