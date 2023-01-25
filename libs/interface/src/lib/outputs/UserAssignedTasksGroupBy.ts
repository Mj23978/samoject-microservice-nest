import { Field, ObjectType } from "@nestjs/graphql";
import { UserAssignedTasksCountAggregate } from "../outputs/UserAssignedTasksCountAggregate";
import { UserAssignedTasksMaxAggregate } from "../outputs/UserAssignedTasksMaxAggregate";
import { UserAssignedTasksMinAggregate } from "../outputs/UserAssignedTasksMinAggregate";

@ObjectType("UserAssignedTasksGroupBy", {
  isAbstract: true
})
export class UserAssignedTasksGroupBy {
  @Field(() => String, {
    nullable: false
  })
  taskId!: string;

  @Field(() => String, {
    nullable: false
  })
  userId!: string;

  @Field(() => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;

  @Field(() => UserAssignedTasksCountAggregate, {
    nullable: true
  })
  _count!: UserAssignedTasksCountAggregate | null;

  @Field(() => UserAssignedTasksMinAggregate, {
    nullable: true
  })
  _min!: UserAssignedTasksMinAggregate | null;

  @Field(() => UserAssignedTasksMaxAggregate, {
    nullable: true
  })
  _max!: UserAssignedTasksMaxAggregate | null;
}
