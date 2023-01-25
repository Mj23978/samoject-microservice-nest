import { SpaceUpdateManyMutationInput } from "../../../inputs/SpaceUpdateManyMutationInput";
import { SpaceWhereInput } from "../../../inputs/SpaceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySpaceArgs {
  @Field(() => SpaceUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpaceUpdateManyMutationInput;

  @Field(() => SpaceWhereInput, {
    nullable: true
  })
  where?: SpaceWhereInput | undefined;
}
