import { SpaceViewCreateInput } from "../../../inputs/SpaceViewCreateInput";
import { SpaceViewUpdateInput } from "../../../inputs/SpaceViewUpdateInput";
import { SpaceViewWhereUniqueInput } from "../../../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSpaceViewArgs {
  @Field(() => SpaceViewWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceViewWhereUniqueInput;

  @Field(() => SpaceViewCreateInput, {
    nullable: false
  })
  create!: SpaceViewCreateInput;

  @Field(() => SpaceViewUpdateInput, {
    nullable: false
  })
  update!: SpaceViewUpdateInput;
}
