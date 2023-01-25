import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("SpaceCountAggregate", {
  isAbstract: true
})
export class SpaceCountAggregate {
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
  viewId!: number;

  @Field(() => Int, {
    nullable: false
  })
  projectId!: number;

  @Field(() => Int, {
    nullable: false
  })
  settingsId!: number;

  @Field(() => Int, {
    nullable: false
  })
  spaceType!: number;

  @Field(() => Int, {
    nullable: false
  })
  parentId!: number;

  @Field(() => Int, {
    nullable: false
  })
  chatId!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
