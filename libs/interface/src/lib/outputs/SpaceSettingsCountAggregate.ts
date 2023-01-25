import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("SpaceSettingsCountAggregate", {
  isAbstract: true
})
export class SpaceSettingsCountAggregate {
  @Field(() => Int, {
    nullable: false
  })
  id!: number;

  @Field(() => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  localId!: number;

  @Field(() => Int, {
    nullable: false
  })
  spaceId!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
