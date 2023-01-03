import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAssignedTasksUpdateManyMutationInput } from "../../../inputs/UserAssignedTasksUpdateManyMutationInput";
import { UserAssignedTasksWhereInput } from "../../../inputs/UserAssignedTasksWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserAssignedTasksArgs {
  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserAssignedTasksUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserAssignedTasksWhereInput, {
    nullable: true
  })
  where?: UserAssignedTasksWhereInput | undefined;
}
