import { Field, InputType } from "@nestjs/graphql";

@InputType("UserAssignedTasksCreateManyInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateManyInput {
  @Field(() => String, {
    nullable: false
  })
  taskId!: string;

  @Field(() => String, {
    nullable: false
  })
  userId!: string;

  @Field(() => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;
}
