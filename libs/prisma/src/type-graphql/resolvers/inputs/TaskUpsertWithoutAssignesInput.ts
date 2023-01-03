import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutAssignesInput } from "../inputs/TaskCreateWithoutAssignesInput";
import { TaskUpdateWithoutAssignesInput } from "../inputs/TaskUpdateWithoutAssignesInput";

@TypeGraphQL.InputType("TaskUpsertWithoutAssignesInput", {
  isAbstract: true
})
export class TaskUpsertWithoutAssignesInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutAssignesInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutAssignesInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutAssignesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAssignesInput;
}
