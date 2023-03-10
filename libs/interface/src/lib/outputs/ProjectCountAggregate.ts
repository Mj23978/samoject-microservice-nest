import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("ProjectCountAggregate", {
  isAbstract: true
})
export class ProjectCountAggregate {
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
  title!: number;

  @Field(() => Int, {
    nullable: false
  })
  description!: number;

  @Field(() => Int, {
    nullable: false
  })
  settingsId!: number;

  @Field(() => Int, {
    nullable: false
  })
  workspaceId!: number;

  @Field(() => Int, {
    nullable: false
  })
  ownerId!: number;

  @Field(() => Int, {
    nullable: false
  })
  chatId!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
