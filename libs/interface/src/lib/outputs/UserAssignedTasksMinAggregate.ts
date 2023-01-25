import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("UserAssignedTasksMinAggregate", {
  isAbstract: true
})
export class UserAssignedTasksMinAggregate {
  @Field(() => String, {
    nullable: true
  })
  taskId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  userId!: string | null;

  @Field(() => Date, {
    nullable: true
  })
  assignedAt!: Date | null;

  @Field(() => String, {
    nullable: true
  })
  assignedBy!: string | null;
}
