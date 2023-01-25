import { Field, InputType } from "@nestjs/graphql";
import { SpaceSettingsCreateOrConnectWithoutSpaceInput } from "../inputs/SpaceSettingsCreateOrConnectWithoutSpaceInput";
import { SpaceSettingsCreateWithoutSpaceInput } from "../inputs/SpaceSettingsCreateWithoutSpaceInput";
import { SpaceSettingsUpdateWithoutSpaceInput } from "../inputs/SpaceSettingsUpdateWithoutSpaceInput";
import { SpaceSettingsUpsertWithoutSpaceInput } from "../inputs/SpaceSettingsUpsertWithoutSpaceInput";
import { SpaceSettingsWhereUniqueInput } from "../inputs/SpaceSettingsWhereUniqueInput";

@InputType("SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput", {
  isAbstract: true
})
export class SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput {
  @Field(() => SpaceSettingsCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: SpaceSettingsCreateWithoutSpaceInput | undefined;

  @Field(() => SpaceSettingsCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: SpaceSettingsCreateOrConnectWithoutSpaceInput | undefined;

  @Field(() => SpaceSettingsUpsertWithoutSpaceInput, {
    nullable: true
  })
  upsert?: SpaceSettingsUpsertWithoutSpaceInput | undefined;

  @Field(() => SpaceSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceSettingsWhereUniqueInput | undefined;

  @Field(() => SpaceSettingsUpdateWithoutSpaceInput, {
    nullable: true
  })
  update?: SpaceSettingsUpdateWithoutSpaceInput | undefined;
}
