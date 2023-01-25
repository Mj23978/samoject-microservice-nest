import { TaskUpdateInput } from "../../../inputs/TaskUpdateInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTaskArgs {
  @Field(() => TaskUpdateInput, {
    nullable: false
  })
  data!: TaskUpdateInput;

  @Field(() => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;
}
