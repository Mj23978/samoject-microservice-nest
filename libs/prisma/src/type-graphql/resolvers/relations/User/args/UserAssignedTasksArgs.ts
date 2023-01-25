import { UserAssignedTasksScalarFieldEnum } from "../../../../enums/UserAssignedTasksScalarFieldEnum";
import { UserAssignedTasksOrderByWithRelationInput } from "../../../inputs/UserAssignedTasksOrderByWithRelationInput";
import { UserAssignedTasksWhereInput } from "../../../inputs/UserAssignedTasksWhereInput";
import { UserAssignedTasksWhereUniqueInput } from "../../../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UserAssignedTasksArgs {
  @Field(() => UserAssignedTasksWhereInput, {
    nullable: true
  })
  where?: UserAssignedTasksWhereInput | undefined;

  @Field(() => [UserAssignedTasksOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserAssignedTasksOrderByWithRelationInput[] | undefined;

  @Field(() => UserAssignedTasksWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserAssignedTasksWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(() => [UserAssignedTasksScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"taskId" | "userId" | "assignedAt" | "assignedBy"> | undefined;
}
