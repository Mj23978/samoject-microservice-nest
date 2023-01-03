import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCreateManyTaskInput } from "../inputs/UserAssignedTasksCreateManyTaskInput";

@TypeGraphQL.InputType("UserAssignedTasksCreateManyTaskInputEnvelope", {
  isAbstract: true
})
export class UserAssignedTasksCreateManyTaskInputEnvelope {
  @TypeGraphQL.Field(_type => [UserAssignedTasksCreateManyTaskInput], {
    nullable: false
  })
  data!: UserAssignedTasksCreateManyTaskInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
