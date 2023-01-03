import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateManyUserInputEnvelope } from "../inputs/UserAssignedTasksCreateManyUserInputEnvelope";
import { UserAssignedTasksCreateOrConnectWithoutUserInput } from "../inputs/UserAssignedTasksCreateOrConnectWithoutUserInput";
import { UserAssignedTasksCreateWithoutUserInput } from "../inputs/UserAssignedTasksCreateWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserAssignedTasksCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserAssignedTasksCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserAssignedTasksCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  connect?: UserAssignedTasksWhereUniqueInput[] | undefined;
}
