import { Field, ObjectType } from "@nestjs/graphql";
import { WorkspaceSettingsCountAggregate } from "../outputs/WorkspaceSettingsCountAggregate";
import { WorkspaceSettingsMaxAggregate } from "../outputs/WorkspaceSettingsMaxAggregate";
import { WorkspaceSettingsMinAggregate } from "../outputs/WorkspaceSettingsMinAggregate";

@ObjectType("AggregateWorkspaceSettings", {
  isAbstract: true
})
export class AggregateWorkspaceSettings {
  @Field(() => WorkspaceSettingsCountAggregate, {
    nullable: true
  })
  _count!: WorkspaceSettingsCountAggregate | null;

  @Field(() => WorkspaceSettingsMinAggregate, {
    nullable: true
  })
  _min!: WorkspaceSettingsMinAggregate | null;

  @Field(() => WorkspaceSettingsMaxAggregate, {
    nullable: true
  })
  _max!: WorkspaceSettingsMaxAggregate | null;
}
