import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksUpdateWithoutUserInput } from "../inputs/UserAssignedTasksUpdateWithoutUserInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateWithoutUserInput;
}
