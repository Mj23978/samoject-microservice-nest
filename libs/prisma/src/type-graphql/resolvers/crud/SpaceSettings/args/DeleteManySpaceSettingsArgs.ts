import { SpaceSettingsWhereInput } from "../../../inputs/SpaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySpaceSettingsArgs {
  @Field(() => SpaceSettingsWhereInput, {
    nullable: true
  })
  where?: SpaceSettingsWhereInput | undefined;
}
