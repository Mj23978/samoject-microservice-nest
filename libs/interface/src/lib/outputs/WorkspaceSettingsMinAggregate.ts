import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("WorkspaceSettingsMinAggregate", {
  isAbstract: true
})
export class WorkspaceSettingsMinAggregate {
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
