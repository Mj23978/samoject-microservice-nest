import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateWithoutUserInput } from "../inputs/UserAssignedTasksCreateWithoutUserInput";
import { UserAssignedTasksUpdateWithoutUserInput } from "../inputs/UserAssignedTasksUpdateWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserAssignedTasksUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateWithoutUserInput;
}
