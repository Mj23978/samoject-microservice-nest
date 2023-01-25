import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("WorkspaceCountAggregate", {
  isAbstract: true
})
export class WorkspaceCountAggregate {
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
  settingsId!: number;

  @Field(() => Int, {
    nullable: false
  })
  userId!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
