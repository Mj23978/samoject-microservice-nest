import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("ProjectSettingsCountAggregate", {
  isAbstract: true
})
export class ProjectSettingsCountAggregate {
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
  projectId!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
