import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateWithoutTaskInput } from "../inputs/UserAssignedTasksCreateWithoutTaskInput";
import { UserAssignedTasksUpdateWithoutTaskInput } from "../inputs/UserAssignedTasksUpdateWithoutTaskInput";
import { UserAssignedTasksWhereUniqueInput } from "../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.InputType("UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: UserAssignedTasksUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateWithoutTaskInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateWithoutTaskInput;
}
