import { SpaceSettingsUpdateInput } from "../../../inputs/SpaceSettingsUpdateInput";
import { SpaceSettingsWhereUniqueInput } from "../../../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSpaceSettingsArgs {
  @Field(() => SpaceSettingsUpdateInput, {
    nullable: false
  })
  data!: SpaceSettingsUpdateInput;

  @Field(() => SpaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceSettingsWhereUniqueInput;
}
