import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UserAssignedTasksScalarWhereInput", {
  isAbstract: true
})
export class UserAssignedTasksScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  AND?: UserAssignedTasksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  OR?: UserAssignedTasksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  NOT?: UserAssignedTasksScalarWhereInput[] | undefined;

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
}
