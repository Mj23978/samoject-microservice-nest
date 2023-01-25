import { Field, ObjectType } from "@nestjs/graphql";
import { SpaceViewCountAggregate } from "../outputs/SpaceViewCountAggregate";
import { SpaceViewMaxAggregate } from "../outputs/SpaceViewMaxAggregate";
import { SpaceViewMinAggregate } from "../outputs/SpaceViewMinAggregate";

@ObjectType("AggregateSpaceView", {
  isAbstract: true
})
export class AggregateSpaceView {
  @Field(() => SpaceViewCountAggregate, {
    nullable: true
  })
  _count!: SpaceViewCountAggregate | null;

  @Field(() => SpaceViewMinAggregate, {
    nullable: true
  })
  _min!: SpaceViewMinAggregate | null;

  @Field(() => SpaceViewMaxAggregate, {
    nullable: true
  })
  _max!: SpaceViewMaxAggregate | null;
}
