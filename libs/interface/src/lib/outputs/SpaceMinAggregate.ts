import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("SpaceMinAggregate", {
  isAbstract: true
})
export class SpaceMinAggregate {
  @Field(() => String, {
    nullable: true
  })
  id!: string | null;

  @Field(() => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @Field(() => String, {
    nullable: true
  })
  viewId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  projectId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  settingsId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  spaceType!: string | null;

  @Field(() => String, {
    nullable: true
  })
  parentId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  chatId!: string | null;
}
