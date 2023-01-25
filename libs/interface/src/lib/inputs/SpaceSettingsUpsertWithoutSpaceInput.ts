import { Field, InputType } from "@nestjs/graphql";
import { SpaceSettingsCreateWithoutSpaceInput } from "../inputs/SpaceSettingsCreateWithoutSpaceInput";
import { SpaceSettingsUpdateWithoutSpaceInput } from "../inputs/SpaceSettingsUpdateWithoutSpaceInput";

@InputType("SpaceSettingsUpsertWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceSettingsUpsertWithoutSpaceInput {
  @Field(() => SpaceSettingsUpdateWithoutSpaceInput, {
    nullable: false
  })
  update!: SpaceSettingsUpdateWithoutSpaceInput;

  @Field(() => SpaceSettingsCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: SpaceSettingsCreateWithoutSpaceInput;
}
