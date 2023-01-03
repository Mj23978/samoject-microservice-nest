import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateWithoutUserInput } from "../inputs/UserAssignedTasksCreateWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateWithoutUserInput;
}
