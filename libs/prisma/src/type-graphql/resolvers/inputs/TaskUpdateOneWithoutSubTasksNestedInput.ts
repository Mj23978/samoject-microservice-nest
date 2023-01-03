import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutSubTasksInput } from "../inputs/TaskCreateOrConnectWithoutSubTasksInput";
import { TaskCreateWithoutSubTasksInput } from "../inputs/TaskCreateWithoutSubTasksInput";
import { TaskUpdateWithoutSubTasksInput } from "../inputs/TaskUpdateWithoutSubTasksInput";
import { TaskUpsertWithoutSubTasksInput } from "../inputs/TaskUpsertWithoutSubTasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutSubTasksNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneWithoutSubTasksNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutSubTasksInput, {
    nullable: true
  })
  create?: TaskCreateWithoutSubTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutSubTasksInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutSubTasksInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutSubTasksInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutSubTasksInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutSubTasksInput | undefined;
}
