import { Field, ObjectType } from "@nestjs/graphql";
import { ProjectSettingsCountAggregate } from "../outputs/ProjectSettingsCountAggregate";
import { ProjectSettingsMaxAggregate } from "../outputs/ProjectSettingsMaxAggregate";
import { ProjectSettingsMinAggregate } from "../outputs/ProjectSettingsMinAggregate";

@ObjectType("AggregateProjectSettings", {
  isAbstract: true
})
export class AggregateProjectSettings {
  @Field(() => ProjectSettingsCountAggregate, {
    nullable: true
  })
  _count!: ProjectSettingsCountAggregate | null;

  @Field(() => ProjectSettingsMinAggregate, {
    nullable: true
  })
  _min!: ProjectSettingsMinAggregate | null;

  @Field(() => ProjectSettingsMaxAggregate, {
    nullable: true
  })
  _max!: ProjectSettingsMaxAggregate | null;
}
