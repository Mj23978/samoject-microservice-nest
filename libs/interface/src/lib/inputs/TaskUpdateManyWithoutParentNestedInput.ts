import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateManyParentInputEnvelope } from "../inputs/TaskCreateManyParentInputEnvelope";
import { TaskCreateOrConnectWithoutParentInput } from "../inputs/TaskCreateOrConnectWithoutParentInput";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutParentInput } from "../inputs/TaskUpdateManyWithWhereWithoutParentInput";
import { TaskUpdateWithWhereUniqueWithoutParentInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutParentInput";
import { TaskUpsertWithWhereUniqueWithoutParentInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpdateManyWithoutParentNestedInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutParentNestedInput {
  @Field(() => [TaskCreateWithoutParentInput], {
    nullable: true
  })
  create?: TaskCreateWithoutParentInput[] | undefined;

  @Field(() => [TaskCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutParentInput[] | undefined;

  @Field(() => [TaskUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @Field(() => TaskCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyParentInputEnvelope | undefined;

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

  @Field(() => [TaskUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @Field(() => [TaskUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutParentInput[] | undefined;

  @Field(() => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
