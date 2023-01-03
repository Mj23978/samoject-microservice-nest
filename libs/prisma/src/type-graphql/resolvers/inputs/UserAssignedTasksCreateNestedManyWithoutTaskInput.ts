import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateManyTaskInputEnvelope } from "../inputs/UserAssignedTasksCreateManyTaskInputEnvelope";
import { UserAssignedTasksCreateOrConnectWithoutTaskInput } from "../inputs/UserAssignedTasksCreateOrConnectWithoutTaskInput";
import { UserAssignedTasksCreateWithoutTaskInput } from "../inputs/UserAssignedTasksCreateWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksCreateNestedManyWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksCreateNestedManyWithoutTaskInput {
  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateWithoutTaskInput], {
    nullable: true
  })
  create?: UserAssignedTasksCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: UserAssignedTasksCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: UserAssignedTasksCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserAssignedTasksWhereUniqueInput], {
    nullable: true
  })
  connect?: UserAssignedTasksWhereUniqueInput[] | undefined;
}
