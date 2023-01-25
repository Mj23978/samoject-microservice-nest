import { UserCreateManyInput } from "../../../inputs/UserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserArgs {
  @Field(() => [UserCreateManyInput], {
    nullable: false
  })
  data!: UserCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
