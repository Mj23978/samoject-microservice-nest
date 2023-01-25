import { Field, ObjectType } from "@nestjs/graphql";
import { ProjectCountAggregate } from "../outputs/ProjectCountAggregate";
import { ProjectMaxAggregate } from "../outputs/ProjectMaxAggregate";
import { ProjectMinAggregate } from "../outputs/ProjectMinAggregate";

@ObjectType("AggregateProject", {
  isAbstract: true
})
export class AggregateProject {
  @Field(() => ProjectCountAggregate, {
    nullable: true
  })
  _count!: ProjectCountAggregate | null;

  @Field(() => ProjectMinAggregate, {
    nullable: true
  })
  _min!: ProjectMinAggregate | null;

  @Field(() => ProjectMaxAggregate, {
    nullable: true
  })
  _max!: ProjectMaxAggregate | null;
}
