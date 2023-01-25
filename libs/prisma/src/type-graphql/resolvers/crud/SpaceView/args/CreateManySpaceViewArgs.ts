import { SpaceViewCreateManyInput } from "../../../inputs/SpaceViewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySpaceViewArgs {
  @Field(() => [SpaceViewCreateManyInput], {
    nullable: false
  })
  data!: SpaceViewCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
