import { SpaceViewUpdateInput } from "../../../inputs/SpaceViewUpdateInput";
import { SpaceViewWhereUniqueInput } from "../../../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSpaceViewArgs {
  @Field(() => SpaceViewUpdateInput, {
    nullable: false
  })
  data!: SpaceViewUpdateInput;

  @Field(() => SpaceViewWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceViewWhereUniqueInput;
}
