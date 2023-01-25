import { SpaceCreateInput } from "../../../inputs/SpaceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSpaceArgs {
  @Field(() => SpaceCreateInput, {
    nullable: false
  })
  data!: SpaceCreateInput;
}
