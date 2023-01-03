import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyProjectInputEnvelope } from "../inputs/TaskCreateManyProjectInputEnvelope";
import { TaskCreateOrConnectWithoutProjectInput } from "../inputs/TaskCreateOrConnectWithoutProjectInput";
import { TaskCreateWithoutProjectInput } from "../inputs/TaskCreateWithoutProjectInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutProjectInput } from "../inputs/TaskUpdateManyWithWhereWithoutProjectInput";
import { TaskUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutProjectInput";
import { TaskUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutProjectInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutProjectNestedInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutProjectNestedInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutProjectInput], {
    nullable: true
  })
  create?: TaskCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
