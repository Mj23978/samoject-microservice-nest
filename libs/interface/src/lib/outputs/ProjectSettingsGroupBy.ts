import { Field, ObjectType } from "@nestjs/graphql";
import { ProjectSettingsCountAggregate } from "../outputs/ProjectSettingsCountAggregate";
import { ProjectSettingsMaxAggregate } from "../outputs/ProjectSettingsMaxAggregate";
import { ProjectSettingsMinAggregate } from "../outputs/ProjectSettingsMinAggregate";

@ObjectType("ProjectSettingsGroupBy", {
  isAbstract: true
})
export class ProjectSettingsGroupBy {
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
  projectId!: string;

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
