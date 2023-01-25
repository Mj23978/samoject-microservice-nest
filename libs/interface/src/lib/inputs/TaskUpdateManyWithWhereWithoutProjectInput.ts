import { Field, InputType } from "@nestjs/graphql";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyMutationInput } from "../inputs/TaskUpdateManyMutationInput";

@InputType("TaskUpdateManyWithWhereWithoutProjectInput", {
  isAbstract: true
})
export class TaskUpdateManyWithWhereWithoutProjectInput {
  @Field(() => TaskScalarWhereInput, {
    nullable: false
  })
  where!: TaskScalarWhereInput;

  @Field(() => TaskUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskUpdateManyMutationInput;
}
