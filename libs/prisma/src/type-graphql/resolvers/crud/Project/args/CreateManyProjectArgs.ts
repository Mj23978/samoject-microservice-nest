import { ProjectCreateManyInput } from "../../../inputs/ProjectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectArgs {
  @Field(() => [ProjectCreateManyInput], {
    nullable: false
  })
  data!: ProjectCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
