import { UserAssignedTasksCreateManyInput } from "../../../inputs/UserAssignedTasksCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserAssignedTasksArgs {
  @Field(() => [UserAssignedTasksCreateManyInput], {
    nullable: false
  })
  data!: UserAssignedTasksCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
