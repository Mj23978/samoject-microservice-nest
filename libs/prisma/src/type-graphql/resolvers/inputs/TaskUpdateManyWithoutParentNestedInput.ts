import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyParentInputEnvelope } from "../inputs/TaskCreateManyParentInputEnvelope";
import { TaskCreateOrConnectWithoutParentInput } from "../inputs/TaskCreateOrConnectWithoutParentInput";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutParentInput } from "../inputs/TaskUpdateManyWithWhereWithoutParentInput";
import { TaskUpdateWithWhereUniqueWithoutParentInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutParentInput";
import { TaskUpsertWithWhereUniqueWithoutParentInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutParentNestedInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutParentNestedInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutParentInput], {
    nullable: true
  })
  create?: TaskCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyParentInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
