import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyProjectInputEnvelope } from "../inputs/TaskCreateManyProjectInputEnvelope";
import { TaskCreateOrConnectWithoutProjectInput } from "../inputs/TaskCreateOrConnectWithoutProjectInput";
import { TaskCreateWithoutProjectInput } from "../inputs/TaskCreateWithoutProjectInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutProjectInput], {
    nullable: true
  })
  create?: TaskCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
