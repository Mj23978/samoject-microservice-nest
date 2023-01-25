import { TaskUpdateManyMutationInput } from "../../../inputs/TaskUpdateManyMutationInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTaskArgs {
  @Field(() => TaskUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskUpdateManyMutationInput;

  @Field(() => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;
}
