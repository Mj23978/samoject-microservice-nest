import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateManyProjectInputEnvelope } from "../inputs/TaskCreateManyProjectInputEnvelope";
import { TaskCreateOrConnectWithoutProjectInput } from "../inputs/TaskCreateOrConnectWithoutProjectInput";
import { TaskCreateWithoutProjectInput } from "../inputs/TaskCreateWithoutProjectInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutProjectInput } from "../inputs/TaskUpdateManyWithWhereWithoutProjectInput";
import { TaskUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutProjectInput";
import { TaskUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutProjectInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpdateManyWithoutProjectNestedInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutProjectNestedInput {
  @Field(() => [TaskCreateWithoutProjectInput], {
    nullable: true
  })
  create?: TaskCreateWithoutProjectInput[] | undefined;

  @Field(() => [TaskCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutProjectInput[] | undefined;

  @Field(() => [TaskUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @Field(() => TaskCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyProjectInputEnvelope | undefined;

  @Field(() => [TaskWhereUniqueInput], {
    nullable: true
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @Field(() => [TaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @Field(() => [TaskWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @Field(() => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @Field(() => [TaskUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @Field(() => [TaskUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @Field(() => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
