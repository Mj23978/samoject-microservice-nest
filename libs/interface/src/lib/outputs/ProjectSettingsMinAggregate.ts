import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("ProjectSettingsMinAggregate", {
  isAbstract: true
})
export class ProjectSettingsMinAggregate {
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
  projectId!: string | null;
}
