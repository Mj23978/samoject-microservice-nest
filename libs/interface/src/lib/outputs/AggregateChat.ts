import { Field, ObjectType } from "@nestjs/graphql";
import { ChatCountAggregate } from "../outputs/ChatCountAggregate";
import { ChatMaxAggregate } from "../outputs/ChatMaxAggregate";
import { ChatMinAggregate } from "../outputs/ChatMinAggregate";

@ObjectType("AggregateChat", {
  isAbstract: true
})
export class AggregateChat {
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
