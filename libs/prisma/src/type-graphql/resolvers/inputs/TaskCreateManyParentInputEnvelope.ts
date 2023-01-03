import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyParentInput } from "../inputs/TaskCreateManyParentInput";

@TypeGraphQL.InputType("TaskCreateManyParentInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyParentInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyParentInput], {
    nullable: false
  })
  data!: TaskCreateManyParentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
