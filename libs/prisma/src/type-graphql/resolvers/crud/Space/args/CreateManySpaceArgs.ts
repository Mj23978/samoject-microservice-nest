import { SpaceCreateManyInput } from "../../../inputs/SpaceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySpaceArgs {
  @Field(() => [SpaceCreateManyInput], {
    nullable: false
  })
  data!: SpaceCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
