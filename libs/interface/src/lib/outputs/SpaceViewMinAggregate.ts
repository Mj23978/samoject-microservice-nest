import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("SpaceViewMinAggregate", {
  isAbstract: true
})
export class SpaceViewMinAggregate {
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
