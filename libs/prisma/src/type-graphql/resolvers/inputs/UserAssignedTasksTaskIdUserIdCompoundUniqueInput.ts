import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("UserAssignedTasksTaskIdUserIdCompoundUniqueInput", {
  isAbstract: true
})
export class UserAssignedTasksTaskIdUserIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taskId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
