import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutSettingsInput } from "../inputs/SpaceCreateWithoutSettingsInput";
import { SpaceUpdateWithoutSettingsInput } from "../inputs/SpaceUpdateWithoutSettingsInput";

@InputType("SpaceUpsertWithoutSettingsInput", {
  isAbstract: true
})
export class SpaceUpsertWithoutSettingsInput {
  @Field(() => SpaceUpdateWithoutSettingsInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutSettingsInput;

  @Field(() => SpaceCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutSettingsInput;
}
