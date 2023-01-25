import { UserAssignedTasksScalarFieldEnum } from "../../../../enums/UserAssignedTasksScalarFieldEnum";
import { UserAssignedTasksOrderByWithAggregationInput } from "../../../inputs/UserAssignedTasksOrderByWithAggregationInput";
import { UserAssignedTasksScalarWhereWithAggregatesInput } from "../../../inputs/UserAssignedTasksScalarWhereWithAggregatesInput";
import { UserAssignedTasksWhereInput } from "../../../inputs/UserAssignedTasksWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByUserAssignedTasksArgs {
  @Field(() => UserAssignedTasksWhereInput, {
    nullable: true
  })
  where?: UserAssignedTasksWhereInput | undefined;

  @Field(() => [UserAssignedTasksOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserAssignedTasksOrderByWithAggregationInput[] | undefined;

  @Field(() => [UserAssignedTasksScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"taskId" | "userId" | "assignedAt" | "assignedBy">;

  @Field(() => UserAssignedTasksScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserAssignedTasksScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
