import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserAssignedTasksScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserAssignedTasksScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserAssignedTasksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserAssignedTasksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserAssignedTasksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  taskId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  assignedBy?: StringWithAggregatesFilter | undefined;
}
