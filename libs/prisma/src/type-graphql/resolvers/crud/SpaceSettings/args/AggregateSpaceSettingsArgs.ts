import { SpaceSettingsOrderByWithRelationInput } from "../../../inputs/SpaceSettingsOrderByWithRelationInput";
import { SpaceSettingsWhereInput } from "../../../inputs/SpaceSettingsWhereInput";
import { SpaceSettingsWhereUniqueInput } from "../../../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSpaceSettingsArgs {
  @Field(() => SpaceSettingsWhereInput, {
    nullable: true
  })
  where?: SpaceSettingsWhereInput | undefined;

  @Field(() => [SpaceSettingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SpaceSettingsOrderByWithRelationInput[] | undefined;

  @Field(() => SpaceSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SpaceSettingsWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
