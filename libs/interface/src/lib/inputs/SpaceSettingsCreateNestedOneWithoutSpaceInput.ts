import { Field, InputType } from "@nestjs/graphql";
import { SpaceSettingsCreateOrConnectWithoutSpaceInput } from "../inputs/SpaceSettingsCreateOrConnectWithoutSpaceInput";
import { SpaceSettingsCreateWithoutSpaceInput } from "../inputs/SpaceSettingsCreateWithoutSpaceInput";
import { SpaceSettingsWhereUniqueInput } from "../inputs/SpaceSettingsWhereUniqueInput";

@InputType("SpaceSettingsCreateNestedOneWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceSettingsCreateNestedOneWithoutSpaceInput {
  @Field(() => SpaceSettingsCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: SpaceSettingsCreateWithoutSpaceInput | undefined;

  @Field(() => SpaceSettingsCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: SpaceSettingsCreateOrConnectWithoutSpaceInput | undefined;

  @Field(() => SpaceSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceSettingsWhereUniqueInput | undefined;
}
