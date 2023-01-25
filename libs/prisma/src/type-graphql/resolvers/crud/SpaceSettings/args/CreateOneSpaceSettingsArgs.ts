import { SpaceSettingsCreateInput } from "../../../inputs/SpaceSettingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSpaceSettingsArgs {
  @Field(() => SpaceSettingsCreateInput, {
    nullable: false
  })
  data!: SpaceSettingsCreateInput;
}
