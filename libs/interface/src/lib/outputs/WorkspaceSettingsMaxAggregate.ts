import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("WorkspaceSettingsMaxAggregate", {
  isAbstract: true
})
export class WorkspaceSettingsMaxAggregate {
  @Field(() => String, {
    nullable: true
  })
  id!: string | null;

  @Field(() => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @Field(() => String, {
    nullable: true
  })
  localId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  workspaceId!: string | null;
}
