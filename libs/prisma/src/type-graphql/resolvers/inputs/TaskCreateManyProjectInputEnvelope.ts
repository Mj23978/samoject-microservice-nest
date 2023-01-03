import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyProjectInput } from "../inputs/TaskCreateManyProjectInput";

@TypeGraphQL.InputType("TaskCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyProjectInput], {
    nullable: false
  })
  data!: TaskCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
