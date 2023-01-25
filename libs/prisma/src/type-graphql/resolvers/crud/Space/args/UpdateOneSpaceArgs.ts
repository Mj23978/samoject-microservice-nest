import { SpaceUpdateInput } from "../../../inputs/SpaceUpdateInput";
import { SpaceWhereUniqueInput } from "../../../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSpaceArgs {
  @Field(() => SpaceUpdateInput, {
    nullable: false
  })
  data!: SpaceUpdateInput;

  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;
}
