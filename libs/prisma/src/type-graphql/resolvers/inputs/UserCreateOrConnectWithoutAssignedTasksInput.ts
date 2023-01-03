import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAssignedTasksInput } from "../inputs/UserCreateWithoutAssignedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutAssignedTasksInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutAssignedTasksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAssignedTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutAssignedTasksInput;
}
