import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("UserAssignedTasksMaxAggregate", {
  isAbstract: true
})
export class UserAssignedTasksMaxAggregate {
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
