import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAssignedTasksWhereInput } from "../../../inputs/UserAssignedTasksWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserAssignedTasksArgs {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereInput, {
    nullable: true
  })
  where?: UserAssignedTasksWhereInput | undefined;
}
