import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateManyCreatorInputEnvelope } from "../inputs/TaskCreateManyCreatorInputEnvelope";
import { TaskCreateOrConnectWithoutCreatorInput } from "../inputs/TaskCreateOrConnectWithoutCreatorInput";
import { TaskCreateWithoutCreatorInput } from "../inputs/TaskCreateWithoutCreatorInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutCreatorInput } from "../inputs/TaskUpdateManyWithWhereWithoutCreatorInput";
import { TaskUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutCreatorInput";
import { TaskUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutCreatorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpdateManyWithoutCreatorNestedInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutCreatorNestedInput {
  @Field(() => [TaskCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: TaskCreateWithoutCreatorInput[] | undefined;

  @Field(() => [TaskCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput[] | undefined;

  @Field(() => [TaskUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @Field(() => TaskCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyCreatorInputEnvelope | undefined;

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

  @Field(() => [TaskUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @Field(() => [TaskUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @Field(() => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
