import { Field, InputType } from "@nestjs/graphql";

@InputType("UserAssignedTasksTaskIdUserIdCompoundUniqueInput", {
  isAbstract: true
})
export class UserAssignedTasksTaskIdUserIdCompoundUniqueInput {
  @Field(() => String, {
    nullable: false
  })
  taskId!: string;

  @Field(() => String, {
    nullable: false
  })
  userId!: string;
}
