import { Field, InputType } from "@nestjs/graphql";
import { SpaceSettingsWhereInput } from "../inputs/SpaceSettingsWhereInput";

@InputType("SpaceSettingsRelationFilter", {
  isAbstract: true
})
export class SpaceSettingsRelationFilter {
  @Field(() => SpaceSettingsWhereInput, {
    nullable: true
  })
  is?: SpaceSettingsWhereInput | undefined;

  @Field(() => SpaceSettingsWhereInput, {
    nullable: true
  })
  isNot?: SpaceSettingsWhereInput | undefined;
}
