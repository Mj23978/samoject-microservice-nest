import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("TaskMaxAggregate", {
  isAbstract: true
})
export class TaskMaxAggregate {
  @Field(() => String, {
    nullable: true
  })
  id!: string | null;

  @Field(() => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

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
    nullable: true
  })
  status!: string | null;

  @Field(() => String, {
    nullable: true
  })
  details!: string | null;

  @Field(() => String, {
    nullable: true
  })
  chatId!: string | null;
}
