import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutCreatorInput } from "../inputs/TaskUpdateWithoutCreatorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutCreatorInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutCreatorInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutCreatorInput;
}
