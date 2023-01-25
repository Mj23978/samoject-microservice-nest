import { Field, InputType } from "@nestjs/graphql";

@InputType("SpaceWhereUniqueInput", {
  isAbstract: true
})
export class SpaceWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  viewId?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  settingsId?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | undefined;
}
