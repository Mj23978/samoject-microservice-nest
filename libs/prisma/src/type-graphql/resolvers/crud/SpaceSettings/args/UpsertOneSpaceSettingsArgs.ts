import { SpaceSettingsCreateInput } from "../../../inputs/SpaceSettingsCreateInput";
import { SpaceSettingsUpdateInput } from "../../../inputs/SpaceSettingsUpdateInput";
import { SpaceSettingsWhereUniqueInput } from "../../../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSpaceSettingsArgs {
  @Field(() => SpaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceSettingsWhereUniqueInput;

  @Field(() => SpaceSettingsCreateInput, {
    nullable: false
  })
  create!: SpaceSettingsCreateInput;

  @Field(() => SpaceSettingsUpdateInput, {
    nullable: false
  })
  update!: SpaceSettingsUpdateInput;
}
