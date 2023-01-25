import { Field, InputType } from "@nestjs/graphql";

@InputType("SpaceSettingsCreateWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceSettingsCreateWithoutSpaceInput {
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
