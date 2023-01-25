import { TaskCreateInput } from "../../../inputs/TaskCreateInput";
import { TaskUpdateInput } from "../../../inputs/TaskUpdateInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTaskArgs {
  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @Field(() => TaskCreateInput, {
    nullable: false
  })
  create!: TaskCreateInput;

  @Field(() => TaskUpdateInput, {
    nullable: false
  })
  update!: TaskUpdateInput;
}
