import { Field, ObjectType } from "@nestjs/graphql";
import { ProjectsOnUsersCountAggregate } from "../outputs/ProjectsOnUsersCountAggregate";
import { ProjectsOnUsersMaxAggregate } from "../outputs/ProjectsOnUsersMaxAggregate";
import { ProjectsOnUsersMinAggregate } from "../outputs/ProjectsOnUsersMinAggregate";

@ObjectType("ProjectsOnUsersGroupBy", {
  isAbstract: true
})
export class ProjectsOnUsersGroupBy {
  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

  @Field(() => String, {
    nullable: false
  })
  userId!: string;

  @Field(() => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;

  @Field(() => ProjectsOnUsersCountAggregate, {
    nullable: true
  })
  _count!: ProjectsOnUsersCountAggregate | null;

  @Field(() => ProjectsOnUsersMinAggregate, {
    nullable: true
  })
  _min!: ProjectsOnUsersMinAggregate | null;

  @Field(() => ProjectsOnUsersMaxAggregate, {
    nullable: true
  })
  _max!: ProjectsOnUsersMaxAggregate | null;
}
