import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAssignedTasksUpdateInput } from "../../../inputs/UserAssignedTasksUpdateInput";
import { UserAssignedTasksWhereUniqueInput } from "../../../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserAssignedTasksArgs {
  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;
}
