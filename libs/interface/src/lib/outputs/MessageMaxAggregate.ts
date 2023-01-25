import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("MessageMaxAggregate", {
  isAbstract: true
})
export class MessageMaxAggregate {
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
  content!: string | null;

  @Field(() => String, {
    nullable: true
  })
  contentType!: string | null;

  @Field(() => String, {
    nullable: true
  })
  type!: string | null;

  @Field(() => String, {
    nullable: true
  })
  senderId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  parentId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  chatId!: string | null;
}
