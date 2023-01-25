import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("WorkspaceSettingsCountAggregate", {
  isAbstract: true
})
export class WorkspaceSettingsCountAggregate {
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
  workspaceId!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
