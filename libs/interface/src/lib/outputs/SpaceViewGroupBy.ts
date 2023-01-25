import { Field, ObjectType } from "@nestjs/graphql";
import { SpaceViewCountAggregate } from "../outputs/SpaceViewCountAggregate";
import { SpaceViewMaxAggregate } from "../outputs/SpaceViewMaxAggregate";
import { SpaceViewMinAggregate } from "../outputs/SpaceViewMinAggregate";

@ObjectType("SpaceViewGroupBy", {
  isAbstract: true
})
export class SpaceViewGroupBy {
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
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  spaceId!: string;

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
