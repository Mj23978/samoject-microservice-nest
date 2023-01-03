import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAssignedTasksCreateInput } from "../../../inputs/UserAssignedTasksCreateInput";
import { UserAssignedTasksUpdateInput } from "../../../inputs/UserAssignedTasksUpdateInput";
import { UserAssignedTasksWhereUniqueInput } from "../../../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserAssignedTasksArgs {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksCreateInput, {
    nullable: false
  })
  create!: UserAssignedTasksCreateInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateInput, {
    nullable: false
  })
  update!: UserAssignedTasksUpdateInput;
}
