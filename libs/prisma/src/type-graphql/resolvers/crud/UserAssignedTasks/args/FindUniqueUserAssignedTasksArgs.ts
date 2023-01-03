import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAssignedTasksWhereUniqueInput } from "../../../inputs/UserAssignedTasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserAssignedTasksArgs {
  @TypeGraphQL.Field(_type => UserAssignedTasksWhereUniqueInput, {
    nullable: false
  })
  where!: UserAssignedTasksWhereUniqueInput;
}
