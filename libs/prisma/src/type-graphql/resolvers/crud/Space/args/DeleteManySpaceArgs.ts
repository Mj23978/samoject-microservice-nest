import { SpaceWhereInput } from "../../../inputs/SpaceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySpaceArgs {
  @Field(() => SpaceWhereInput, {
    nullable: true
  })
  where?: SpaceWhereInput | undefined;
}
