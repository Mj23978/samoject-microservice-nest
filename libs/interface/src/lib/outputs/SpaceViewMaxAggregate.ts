import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("SpaceViewMaxAggregate", {
  isAbstract: true
})
export class SpaceViewMaxAggregate {
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
  spaceId!: string | null;
}
