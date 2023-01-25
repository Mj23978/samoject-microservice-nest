import { Field, ObjectType } from "@nestjs/graphql";
import { UserAssignedTasksCountAggregate } from "../outputs/UserAssignedTasksCountAggregate";
import { UserAssignedTasksMaxAggregate } from "../outputs/UserAssignedTasksMaxAggregate";
import { UserAssignedTasksMinAggregate } from "../outputs/UserAssignedTasksMinAggregate";

@ObjectType("AggregateUserAssignedTasks", {
  isAbstract: true
})
export class AggregateUserAssignedTasks {
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
