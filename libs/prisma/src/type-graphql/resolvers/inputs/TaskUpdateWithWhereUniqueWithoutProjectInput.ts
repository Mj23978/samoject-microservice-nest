import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutProjectInput } from "../inputs/TaskUpdateWithoutProjectInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutProjectInput;
}
