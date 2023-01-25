import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("ProjectsOnUsersMinAggregate", {
  isAbstract: true
})
export class ProjectsOnUsersMinAggregate {
  @Field(() => String, {
    nullable: true
  })
  projectId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  userId!: string | null;

  @Field(() => Date, {
    nullable: true
  })
  assignedAt!: Date | null;

  @Field(() => String, {
    nullable: true
  })
  assignedBy!: string | null;
}
