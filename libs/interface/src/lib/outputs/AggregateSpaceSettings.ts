import { Field, ObjectType } from "@nestjs/graphql";
import { SpaceSettingsCountAggregate } from "../outputs/SpaceSettingsCountAggregate";
import { SpaceSettingsMaxAggregate } from "../outputs/SpaceSettingsMaxAggregate";
import { SpaceSettingsMinAggregate } from "../outputs/SpaceSettingsMinAggregate";

@ObjectType("AggregateSpaceSettings", {
  isAbstract: true
})
export class AggregateSpaceSettings {
  @Field(() => SpaceSettingsCountAggregate, {
    nullable: true
  })
  _count!: SpaceSettingsCountAggregate | null;

  @Field(() => SpaceSettingsMinAggregate, {
    nullable: true
  })
  _min!: SpaceSettingsMinAggregate | null;

  @Field(() => SpaceSettingsMaxAggregate, {
    nullable: true
  })
  _max!: SpaceSettingsMaxAggregate | null;
}
