import { Field, ObjectType } from "@nestjs/graphql";
import { ProjectsOnUsersCountAggregate } from "../outputs/ProjectsOnUsersCountAggregate";
import { ProjectsOnUsersMaxAggregate } from "../outputs/ProjectsOnUsersMaxAggregate";
import { ProjectsOnUsersMinAggregate } from "../outputs/ProjectsOnUsersMinAggregate";

@ObjectType("AggregateProjectsOnUsers", {
  isAbstract: true
})
export class AggregateProjectsOnUsers {
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
