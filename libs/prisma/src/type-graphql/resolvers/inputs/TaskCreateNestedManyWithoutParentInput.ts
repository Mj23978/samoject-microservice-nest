import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyParentInputEnvelope } from "../inputs/TaskCreateManyParentInputEnvelope";
import { TaskCreateOrConnectWithoutParentInput } from "../inputs/TaskCreateOrConnectWithoutParentInput";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutParentInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutParentInput], {
    nullable: true
  })
  create?: TaskCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
