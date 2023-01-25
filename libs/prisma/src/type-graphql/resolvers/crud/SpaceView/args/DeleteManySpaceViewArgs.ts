import { SpaceViewWhereInput } from "../../../inputs/SpaceViewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySpaceViewArgs {
  @Field(() => SpaceViewWhereInput, {
    nullable: true
  })
  where?: SpaceViewWhereInput | undefined;
}
