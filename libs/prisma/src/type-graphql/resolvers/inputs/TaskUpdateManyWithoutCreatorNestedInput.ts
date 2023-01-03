import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyCreatorInputEnvelope } from "../inputs/TaskCreateManyCreatorInputEnvelope";
import { TaskCreateOrConnectWithoutCreatorInput } from "../inputs/TaskCreateOrConnectWithoutCreatorInput";
import { TaskCreateWithoutCreatorInput } from "../inputs/TaskCreateWithoutCreatorInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutCreatorInput } from "../inputs/TaskUpdateManyWithWhereWithoutCreatorInput";
import { TaskUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutCreatorInput";
import { TaskUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutCreatorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutCreatorNestedInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutCreatorNestedInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: TaskCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyCreatorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
