import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutProjectInput } from "../inputs/TaskCreateWithoutProjectInput";
import { TaskUpdateWithoutProjectInput } from "../inputs/TaskUpdateWithoutProjectInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutProjectInput, {
    nullable: false
  })
  create!: TaskCreateWithoutProjectInput;
}
