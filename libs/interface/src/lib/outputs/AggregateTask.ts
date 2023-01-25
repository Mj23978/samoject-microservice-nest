import { Field, ObjectType } from "@nestjs/graphql";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";

@ObjectType("AggregateTask", {
  isAbstract: true
})
export class AggregateTask {
  @Field(() => TaskCountAggregate, {
    nullable: true
  })
  _count!: TaskCountAggregate | null;

  @Field(() => TaskMinAggregate, {
    nullable: true
  })
  _min!: TaskMinAggregate | null;

  @Field(() => TaskMaxAggregate, {
    nullable: true
  })
  _max!: TaskMaxAggregate | null;
}
