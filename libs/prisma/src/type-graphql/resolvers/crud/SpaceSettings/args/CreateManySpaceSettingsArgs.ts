import { SpaceSettingsCreateManyInput } from "../../../inputs/SpaceSettingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySpaceSettingsArgs {
  @Field(() => [SpaceSettingsCreateManyInput], {
    nullable: false
  })
  data!: SpaceSettingsCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
