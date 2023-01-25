import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateManyParentInputEnvelope } from "../inputs/TaskCreateManyParentInputEnvelope";
import { TaskCreateOrConnectWithoutParentInput } from "../inputs/TaskCreateOrConnectWithoutParentInput";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskCreateNestedManyWithoutParentInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutParentInput {
  @Field(() => [TaskCreateWithoutParentInput], {
    nullable: true
  })
  create?: TaskCreateWithoutParentInput[] | undefined;

  @Field(() => [TaskCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutParentInput[] | undefined;

  @Field(() => TaskCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyParentInputEnvelope | undefined;

  @Field(() => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
