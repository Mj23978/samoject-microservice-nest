import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAssignedTasksCreateInput } from "../../../inputs/UserAssignedTasksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserAssignedTasksArgs {
  @TypeGraphQL.Field(_type => UserAssignedTasksCreateInput, {
    nullable: false
  })
  data!: UserAssignedTasksCreateInput;
}
