import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("WorkspaceMaxAggregate", {
  isAbstract: true
})
export class WorkspaceMaxAggregate {
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
  title!: string | null;

  @Field(() => String, {
    nullable: true
  })
  settingsId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  userId!: string | null;
}
