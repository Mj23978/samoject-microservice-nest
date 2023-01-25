import { Field, InputType } from "@nestjs/graphql";

@InputType("UserAssignedTasksCreateManyUserInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateManyUserInput {
  @Field(() => String, {
    nullable: false
  })
  taskId!: string;

  @Field(() => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;
}
