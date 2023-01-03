import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyCreatorInput } from "../inputs/TaskCreateManyCreatorInput";

@TypeGraphQL.InputType("TaskCreateManyCreatorInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyCreatorInput], {
    nullable: false
  })
  data!: TaskCreateManyCreatorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
