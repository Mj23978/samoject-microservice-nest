import { Field, ObjectType } from "@nestjs/graphql";
import { SpaceCountAggregate } from "../outputs/SpaceCountAggregate";
import { SpaceMaxAggregate } from "../outputs/SpaceMaxAggregate";
import { SpaceMinAggregate } from "../outputs/SpaceMinAggregate";

@ObjectType("SpaceGroupBy", {
  isAbstract: true
})
export class SpaceGroupBy {
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
  viewId!: string;

  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

  @Field(() => String, {
    nullable: false
  })
  settingsId!: string;

  @Field(() => String, {
    nullable: false
  })
  spaceType!: string;

  @Field(() => String, {
    nullable: true
  })
  parentId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  chatId!: string | null;

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
