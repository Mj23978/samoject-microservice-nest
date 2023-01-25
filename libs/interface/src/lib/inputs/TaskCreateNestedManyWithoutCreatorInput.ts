import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateManyCreatorInputEnvelope } from "../inputs/TaskCreateManyCreatorInputEnvelope";
import { TaskCreateOrConnectWithoutCreatorInput } from "../inputs/TaskCreateOrConnectWithoutCreatorInput";
import { TaskCreateWithoutCreatorInput } from "../inputs/TaskCreateWithoutCreatorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskCreateNestedManyWithoutCreatorInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutCreatorInput {
  @Field(() => [TaskCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: TaskCreateWithoutCreatorInput[] | undefined;

  @Field(() => [TaskCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput[] | undefined;

  @Field(() => TaskCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyCreatorInputEnvelope | undefined;

  @Field(() => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
