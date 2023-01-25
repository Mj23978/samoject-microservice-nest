import { Field, ObjectType } from "@nestjs/graphql";
import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";

@ObjectType("MessageGroupBy", {
  isAbstract: true
})
export class MessageGroupBy {
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
    nullable: false
  })
  content!: string;

  @Field(() => String, {
    nullable: false
  })
  contentType!: string;

  @Field(() => String, {
    nullable: false
  })
  type!: string;

  @Field(() => String, {
    nullable: true
  })
  senderId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  parentId!: string | null;

  @Field(() => String, {
    nullable: false
  })
  chatId!: string;

  @Field(() => MessageCountAggregate, {
    nullable: true
  })
  _count!: MessageCountAggregate | null;

  @Field(() => MessageMinAggregate, {
    nullable: true
  })
  _min!: MessageMinAggregate | null;

  @Field(() => MessageMaxAggregate, {
    nullable: true
  })
  _max!: MessageMaxAggregate | null;
}
