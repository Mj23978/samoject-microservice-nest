import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateOrConnectWithoutAssignesInput } from "../inputs/TaskCreateOrConnectWithoutAssignesInput";
import { TaskCreateWithoutAssignesInput } from "../inputs/TaskCreateWithoutAssignesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskCreateNestedOneWithoutAssignesInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutAssignesInput {
  @Field(() => TaskCreateWithoutAssignesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutAssignesInput | undefined;

  @Field(() => TaskCreateOrConnectWithoutAssignesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutAssignesInput | undefined;

  @Field(() => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
