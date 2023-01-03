import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksTaskIdUserIdCompoundUniqueInput } from "../inputs/UserAssignedTasksTaskIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksWhereUniqueInput", {
  isAbstract: true
})
export class UserAssignedTasksWhereUniqueInput {
  @TypeGraphQL.Field(_type => UserAssignedTasksTaskIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  taskId_userId?: UserAssignedTasksTaskIdUserIdCompoundUniqueInput | undefined;
}
