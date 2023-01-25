import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("TaskCountAggregate", {
  isAbstract: true
})
export class TaskCountAggregate {
  @Field(() => Int, {
    nullable: false
  })
  id!: number;

  @Field(() => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  projectId!: number;

  @Field(() => Int, {
    nullable: false
  })
  creatorId!: number;

  @Field(() => Int, {
    nullable: false
  })
  parentId!: number;

  @Field(() => Int, {
    nullable: false
  })
  status!: number;

  @Field(() => Int, {
    nullable: false
  })
  details!: number;

  @Field(() => Int, {
    nullable: false
  })
  chatId!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
