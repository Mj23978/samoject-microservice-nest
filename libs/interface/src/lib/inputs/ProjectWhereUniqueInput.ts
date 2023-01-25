import { Field, InputType } from "@nestjs/graphql";

@InputType("ProjectWhereUniqueInput", {
  isAbstract: true
})
export class ProjectWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  settingsId?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | undefined;
}
