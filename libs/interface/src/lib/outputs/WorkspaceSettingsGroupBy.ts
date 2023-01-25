import { Field, ObjectType } from "@nestjs/graphql";
import { WorkspaceSettingsCountAggregate } from "../outputs/WorkspaceSettingsCountAggregate";
import { WorkspaceSettingsMaxAggregate } from "../outputs/WorkspaceSettingsMaxAggregate";
import { WorkspaceSettingsMinAggregate } from "../outputs/WorkspaceSettingsMinAggregate";

@ObjectType("WorkspaceSettingsGroupBy", {
  isAbstract: true
})
export class WorkspaceSettingsGroupBy {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  workspaceId!: string;

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
