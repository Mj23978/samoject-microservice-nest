import { Field, ObjectType } from "@nestjs/graphql";
import { ChatCountAggregate } from "../outputs/ChatCountAggregate";
import { ChatMaxAggregate } from "../outputs/ChatMaxAggregate";
import { ChatMinAggregate } from "../outputs/ChatMinAggregate";

@ObjectType("ChatGroupBy", {
  isAbstract: true
})
export class ChatGroupBy {
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

  @Field(() => ChatCountAggregate, {
    nullable: true
  })
  _count!: ChatCountAggregate | null;

  @Field(() => ChatMinAggregate, {
    nullable: true
  })
  _min!: ChatMinAggregate | null;

  @Field(() => ChatMaxAggregate, {
    nullable: true
  })
  _max!: ChatMaxAggregate | null;
}
