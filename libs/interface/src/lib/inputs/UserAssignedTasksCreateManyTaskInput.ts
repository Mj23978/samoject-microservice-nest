import { Field, InputType } from "@nestjs/graphql";

@InputType("UserAssignedTasksCreateManyTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateManyTaskInput {
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
