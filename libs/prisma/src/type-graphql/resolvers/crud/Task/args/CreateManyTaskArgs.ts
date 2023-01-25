import { TaskCreateManyInput } from "../../../inputs/TaskCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTaskArgs {
  @Field(() => [TaskCreateManyInput], {
    nullable: false
  })
  data!: TaskCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
