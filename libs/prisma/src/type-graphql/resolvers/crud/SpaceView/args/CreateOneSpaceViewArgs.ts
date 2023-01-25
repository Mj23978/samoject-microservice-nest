import { SpaceViewCreateInput } from "../../../inputs/SpaceViewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSpaceViewArgs {
  @Field(() => SpaceViewCreateInput, {
    nullable: false
  })
  data!: SpaceViewCreateInput;
}
