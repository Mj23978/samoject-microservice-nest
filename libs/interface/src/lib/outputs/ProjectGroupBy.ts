import { Field, ObjectType } from "@nestjs/graphql";
import { ProjectCountAggregate } from "../outputs/ProjectCountAggregate";
import { ProjectMaxAggregate } from "../outputs/ProjectMaxAggregate";
import { ProjectMinAggregate } from "../outputs/ProjectMinAggregate";

@ObjectType("ProjectGroupBy", {
  isAbstract: true
})
export class ProjectGroupBy {
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
  title!: string;

  @Field(() => String, {
    nullable: true
  })
  description!: string | null;

  @Field(() => String, {
    nullable: false
  })
  settingsId!: string;

  @Field(() => String, {
    nullable: false
  })
  workspaceId!: string;

  @Field(() => String, {
    nullable: false
  })
  ownerId!: string;

  @Field(() => String, {
    nullable: true
  })
  chatId!: string | null;

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
