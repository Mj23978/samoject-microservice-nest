import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserAssignedTasksWhereInput", {
  isAbstract: true
})
export class UserAssignedTasksWhereInput {
  @TypeGraphQL.Field(_type => [UserAssignedTasksWhereInput], {
    nullable: true
  })
  AND?: UserAssignedTasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksWhereInput], {
    nullable: true
  })
  OR?: UserAssignedTasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksWhereInput], {
    nullable: true
  })
  NOT?: UserAssignedTasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  taskId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  assignedBy?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TaskRelationFilter, {
    nullable: true
  })
  task?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
