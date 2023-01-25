import { SpaceSettingsScalarFieldEnum } from "../../../../enums/SpaceSettingsScalarFieldEnum";
import { SpaceSettingsOrderByWithAggregationInput } from "../../../inputs/SpaceSettingsOrderByWithAggregationInput";
import { SpaceSettingsScalarWhereWithAggregatesInput } from "../../../inputs/SpaceSettingsScalarWhereWithAggregatesInput";
import { SpaceSettingsWhereInput } from "../../../inputs/SpaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class GroupBySpaceSettingsArgs {
  @Field(() => SpaceSettingsWhereInput, {
    nullable: true
  })
  where?: SpaceSettingsWhereInput | undefined;

  @Field(() => [SpaceSettingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SpaceSettingsOrderByWithAggregationInput[] | undefined;

  @Field(() => [SpaceSettingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "localId" | "spaceId">;

  @Field(() => SpaceSettingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SpaceSettingsScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
