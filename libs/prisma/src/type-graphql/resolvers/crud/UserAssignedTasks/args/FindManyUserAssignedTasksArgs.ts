import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAssignedTasksOrderByWithRelationInput } from "../../../inputs/UserAssignedTasksOrderByWithRelationInput";
import { UserAssignedTasksWhereInput } from "../../../inputs/UserAssignedTasksWhereInput";
import { UserAssignedTasksWhereUniqueInput } from "../../../inputs/UserAssignedTasksWhereUniqueInput";
import { UserAssignedTasksScalarFieldEnum } from "../../../../enums/UserAssignedTasksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUserAssignedTasksArgs {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereInput, {
    nullable: true
  })
  where?: UserAssignedTasksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserAssignedTasksOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserAssignedTasksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"taskId" | "userId" | "assignedAt" | "assignedBy"> | undefined;
}
