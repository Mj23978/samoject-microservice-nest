import { Field, InputType } from "@nestjs/graphql";

@InputType("SpaceCreateManyParentInput", {
  isAbstract: true
})
export class SpaceCreateManyParentInput {
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
  viewId!: string;

  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

  @Field(() => String, {
    nullable: false
  })
  settingsId!: string;

  @Field(() => String, {
    nullable: false
  })
  spaceType!: string;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | undefined;
}