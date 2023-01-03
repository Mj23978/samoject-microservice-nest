import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksWhereInput } from "../inputs/UserAssignedTasksWhereInput";

@TypeGraphQL.InputType("UserAssignedTasksListRelationFilter", {
  isAbstract: true
})
export class UserAssignedTasksListRelationFilter {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereInput, {
    nullable: true
  })
  every?: UserAssignedTasksWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksWhereInput, {
    nullable: true
  })
  some?: UserAssignedTasksWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksWhereInput, {
    nullable: true
  })
  none?: UserAssignedTasksWhereInput | undefined;
}
