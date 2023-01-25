import { Field, ObjectType } from "@nestjs/graphql";
import { SpaceSettingsCountAggregate } from "../outputs/SpaceSettingsCountAggregate";
import { SpaceSettingsMaxAggregate } from "../outputs/SpaceSettingsMaxAggregate";
import { SpaceSettingsMinAggregate } from "../outputs/SpaceSettingsMinAggregate";

@ObjectType("SpaceSettingsGroupBy", {
  isAbstract: true
})
export class SpaceSettingsGroupBy {
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
