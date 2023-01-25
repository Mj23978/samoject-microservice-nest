import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("UserAssignedTasksCountAggregate", {
  isAbstract: true
})
export class UserAssignedTasksCountAggregate {
  @Field(() => Int, {
    nullable: false
  })
  taskId!: number;

  @Field(() => Int, {
    nullable: false
  })
  userId!: number;

  @Field(() => Int, {
    nullable: false
  })
  assignedAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  assignedBy!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
