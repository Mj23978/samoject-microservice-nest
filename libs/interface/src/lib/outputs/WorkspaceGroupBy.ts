import { Field, ObjectType } from "@nestjs/graphql";
import { WorkspaceCountAggregate } from "../outputs/WorkspaceCountAggregate";
import { WorkspaceMaxAggregate } from "../outputs/WorkspaceMaxAggregate";
import { WorkspaceMinAggregate } from "../outputs/WorkspaceMinAggregate";

@ObjectType("WorkspaceGroupBy", {
  isAbstract: true
})
export class WorkspaceGroupBy {
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
    nullable: false
  })
  settingsId!: string;

  @Field(() => String, {
    nullable: false
  })
  userId!: string;

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
