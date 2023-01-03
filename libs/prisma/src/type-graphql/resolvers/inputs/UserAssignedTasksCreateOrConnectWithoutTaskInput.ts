import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateWithoutTaskInput } from "../inputs/UserAssignedTasksCreateWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksCreateOrConnectWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateOrConnectWithoutTaskInput {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateWithoutTaskInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateWithoutTaskInput;
}
