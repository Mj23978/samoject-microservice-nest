import { Field, InputType } from "@nestjs/graphql";
import { SpaceSettingsCreateWithoutSpaceInput } from "../inputs/SpaceSettingsCreateWithoutSpaceInput";
import { SpaceSettingsWhereUniqueInput } from "../inputs/SpaceSettingsWhereUniqueInput";

@InputType("SpaceSettingsCreateOrConnectWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceSettingsCreateOrConnectWithoutSpaceInput {
  @Field(() => SpaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceSettingsWhereUniqueInput;

  @Field(() => SpaceSettingsCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: SpaceSettingsCreateWithoutSpaceInput;
}
