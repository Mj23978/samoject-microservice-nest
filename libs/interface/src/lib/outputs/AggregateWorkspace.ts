import { Field, ObjectType } from "@nestjs/graphql";
import { WorkspaceCountAggregate } from "../outputs/WorkspaceCountAggregate";
import { WorkspaceMaxAggregate } from "../outputs/WorkspaceMaxAggregate";
import { WorkspaceMinAggregate } from "../outputs/WorkspaceMinAggregate";

@ObjectType("AggregateWorkspace", {
  isAbstract: true
})
export class AggregateWorkspace {
  @Field(() => WorkspaceCountAggregate, {
    nullable: true
  })
  _count!: WorkspaceCountAggregate | null;

  @Field(() => WorkspaceMinAggregate, {
    nullable: true
  })
  _min!: WorkspaceMinAggregate | null;

  @Field(() => WorkspaceMaxAggregate, {
    nullable: true
  })
  _max!: WorkspaceMaxAggregate | null;
}
