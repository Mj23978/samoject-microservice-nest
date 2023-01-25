import { SpaceViewUpdateManyMutationInput } from "../../../inputs/SpaceViewUpdateManyMutationInput";
import { SpaceViewWhereInput } from "../../../inputs/SpaceViewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySpaceViewArgs {
  @Field(() => SpaceViewUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpaceViewUpdateManyMutationInput;

  @Field(() => SpaceViewWhereInput, {
    nullable: true
  })
  where?: SpaceViewWhereInput | undefined;
}
