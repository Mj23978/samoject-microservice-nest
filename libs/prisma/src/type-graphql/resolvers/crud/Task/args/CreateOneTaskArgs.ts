import { TaskCreateInput } from "../../../inputs/TaskCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTaskArgs {
  @Field(() => TaskCreateInput, {
    nullable: false
  })
  data!: TaskCreateInput;
}
