import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutSubTasksInput } from "../inputs/TaskCreateOrConnectWithoutSubTasksInput";
import { TaskCreateWithoutSubTasksInput } from "../inputs/TaskCreateWithoutSubTasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutSubTasksInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutSubTasksInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutSubTasksInput, {
    nullable: true
  })
  create?: TaskCreateWithoutSubTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutSubTasksInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
