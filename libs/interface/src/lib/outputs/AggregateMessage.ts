import { Field, ObjectType } from "@nestjs/graphql";
import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";

@ObjectType("AggregateMessage", {
  isAbstract: true
})
export class AggregateMessage {
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
