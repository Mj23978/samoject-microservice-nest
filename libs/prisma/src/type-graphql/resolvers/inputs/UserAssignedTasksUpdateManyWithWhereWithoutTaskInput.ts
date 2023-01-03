import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksScalarWhereInput } from "../inputs/UserAssignedTasksScalarWhereInput";
import { UserAssignedTasksUpdateManyMutationInput } from "../inputs/UserAssignedTasksUpdateManyMutationInput";

@TypeGraphQL.InputType("UserAssignedTasksUpdateManyWithWhereWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateManyWithWhereWithoutTaskInput {
  @TypeGraphQL.Field(_type => UserAssignedTasksScalarWhereInput, {
    nullable: false
  })
  where!: UserAssignedTasksScalarWhereInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateManyMutationInput;
}
