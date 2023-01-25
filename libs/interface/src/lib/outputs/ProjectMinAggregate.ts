import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("ProjectMinAggregate", {
  isAbstract: true
})
export class ProjectMinAggregate {
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
  description!: string | null;

  @Field(() => String, {
    nullable: true
  })
  settingsId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  workspaceId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  ownerId!: string | null;

  @Field(() => String, {
    nullable: true
  })
  chatId!: string | null;
}
