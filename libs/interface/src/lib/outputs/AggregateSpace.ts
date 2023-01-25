import { Field, ObjectType } from "@nestjs/graphql";
import { SpaceCountAggregate } from "../outputs/SpaceCountAggregate";
import { SpaceMaxAggregate } from "../outputs/SpaceMaxAggregate";
import { SpaceMinAggregate } from "../outputs/SpaceMinAggregate";

@ObjectType("AggregateSpace", {
  isAbstract: true
})
export class AggregateSpace {
  @Field(() => SpaceCountAggregate, {
    nullable: true
  })
  _count!: SpaceCountAggregate | null;

  @Field(() => SpaceMinAggregate, {
    nullable: true
  })
  _min!: SpaceMinAggregate | null;

  @Field(() => SpaceMaxAggregate, {
    nullable: true
  })
  _max!: SpaceMaxAggregate | null;
}
