import { SpaceCreateInput } from "../../../inputs/SpaceCreateInput";
import { SpaceUpdateInput } from "../../../inputs/SpaceUpdateInput";
import { SpaceWhereUniqueInput } from "../../../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSpaceArgs {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceCreateInput, {
    nullable: false
  })
  create!: SpaceCreateInput;

  @Field(() => SpaceUpdateInput, {
    nullable: false
  })
  update!: SpaceUpdateInput;
}
