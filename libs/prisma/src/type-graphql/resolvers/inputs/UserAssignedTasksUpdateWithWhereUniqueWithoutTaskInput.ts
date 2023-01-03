import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksUpdateWithoutTaskInput } from "../inputs/UserAssignedTasksUpdateWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateWithoutTaskInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateWithoutTaskInput;
}
