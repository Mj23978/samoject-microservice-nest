import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutAssignesInput } from "../inputs/TaskCreateOrConnectWithoutAssignesInput";
import { TaskCreateWithoutAssignesInput } from "../inputs/TaskCreateWithoutAssignesInput";
import { TaskUpdateWithoutAssignesInput } from "../inputs/TaskUpdateWithoutAssignesInput";
import { TaskUpsertWithoutAssignesInput } from "../inputs/TaskUpsertWithoutAssignesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutAssignesNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneRequiredWithoutAssignesNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutAssignesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutAssignesInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutAssignesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutAssignesInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutAssignesInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutAssignesInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutAssignesInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutAssignesInput | undefined;
}
