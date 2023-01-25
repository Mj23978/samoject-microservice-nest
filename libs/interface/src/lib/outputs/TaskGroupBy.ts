import { Field, ObjectType } from "@nestjs/graphql";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";

@ObjectType("TaskGroupBy", {
  isAbstract: true
})
export class TaskGroupBy {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(() => String, {
    nullable: true
  })
  projectId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  creatorId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  parentId!: string | null;

  @Field(() => String, {
    nullable: false
  })
  status!: string;

  @Field(() => String, {
    nullable: false
  })
  details!: string;

  @Field(() => String, {
    nullable: true
  })
  chatId!: string | null;

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
