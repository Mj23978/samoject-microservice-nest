import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("MessageCountAggregate", {
  isAbstract: true
})
export class MessageCountAggregate {
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
  content!: number;

  @Field(() => Int, {
    nullable: false
  })
  contentType!: number;

  @Field(() => Int, {
    nullable: false
  })
  type!: number;

  @Field(() => Int, {
    nullable: false
  })
  senderId!: number;

  @Field(() => Int, {
    nullable: false
  })
  parentId!: number;

  @Field(() => Int, {
    nullable: false
  })
  chatId!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
