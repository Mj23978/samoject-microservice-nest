import { SpaceSettingsUpdateManyMutationInput } from "../../../inputs/SpaceSettingsUpdateManyMutationInput";
import { SpaceSettingsWhereInput } from "../../../inputs/SpaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySpaceSettingsArgs {
  @Field(() => SpaceSettingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpaceSettingsUpdateManyMutationInput;

  @Field(() => SpaceSettingsWhereInput, {
    nullable: true
  })
  where?: SpaceSettingsWhereInput | undefined;
}
