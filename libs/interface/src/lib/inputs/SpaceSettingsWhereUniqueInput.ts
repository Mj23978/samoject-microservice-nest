import { Field, InputType } from "@nestjs/graphql";

@InputType("SpaceSettingsWhereUniqueInput", {
  isAbstract: true
})
export class SpaceSettingsWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;
}
