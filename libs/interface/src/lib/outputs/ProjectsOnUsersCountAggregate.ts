import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("ProjectsOnUsersCountAggregate", {
  isAbstract: true
})
export class ProjectsOnUsersCountAggregate {
  @Field(() => Int, {
    nullable: false
  })
  projectId!: number;

  @Field(() => Int, {
    nullable: false
  })
  userId!: number;

  @Field(() => Int, {
    nullable: false
  })
  assignedAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  assignedBy!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
