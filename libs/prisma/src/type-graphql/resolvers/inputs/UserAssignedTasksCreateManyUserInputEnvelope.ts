import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateManyUserInput } from "../inputs/UserAssignedTasksCreateManyUserInput";

@TypeGraphQL.InputType("UserAssignedTasksCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class UserAssignedTasksCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateManyUserInput], {
    nullable: false
  })
  data!: UserAssignedTasksCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
