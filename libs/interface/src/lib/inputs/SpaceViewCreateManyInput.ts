import { Field, InputType } from "@nestjs/graphql";

@InputType("SpaceViewCreateManyInput", {
  isAbstract: true
})
export class SpaceViewCreateManyInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  spaceId!: string;
}
