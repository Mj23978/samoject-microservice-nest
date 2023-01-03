import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserAssignedTasksCreateManyInput } from "../../../inputs/UserAssignedTasksCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserAssignedTasksArgs {
  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateManyInput], {
    nullable: false
  })
  data!: UserAssignedTasksCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
