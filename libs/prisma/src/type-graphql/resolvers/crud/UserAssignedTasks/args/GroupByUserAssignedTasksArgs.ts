import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAssignedTasksOrderByWithAggregationInput } from "../../../inputs/UserAssignedTasksOrderByWithAggregationInput";
import { UserAssignedTasksScalarWhereWithAggregatesInput } from "../../../inputs/UserAssignedTasksScalarWhereWithAggregatesInput";
import { UserAssignedTasksWhereInput } from "../../../inputs/UserAssignedTasksWhereInput";
import { UserAssignedTasksScalarFieldEnum } from "../../../../enums/UserAssignedTasksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserAssignedTasksArgs {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereInput, {
    nullable: true
  })
  where?: UserAssignedTasksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserAssignedTasksOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"taskId" | "userId" | "assignedAt" | "assignedBy">;

  @TypeGraphQL.Field(_type => UserAssignedTasksScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserAssignedTasksScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
