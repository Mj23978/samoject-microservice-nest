import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateOrConnectWithoutAssignesInput } from "../inputs/TaskCreateOrConnectWithoutAssignesInput";
import { TaskCreateWithoutAssignesInput } from "../inputs/TaskCreateWithoutAssignesInput";
import { TaskUpdateWithoutAssignesInput } from "../inputs/TaskUpdateWithoutAssignesInput";
import { TaskUpsertWithoutAssignesInput } from "../inputs/TaskUpsertWithoutAssignesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpdateOneRequiredWithoutAssignesNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneRequiredWithoutAssignesNestedInput {
  @Field(() => TaskCreateWithoutAssignesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutAssignesInput | undefined;

  @Field(() => TaskCreateOrConnectWithoutAssignesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutAssignesInput | undefined;

  @Field(() => TaskUpsertWithoutAssignesInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutAssignesInput | undefined;

  @Field(() => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @Field(() => TaskUpdateWithoutAssignesInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutAssignesInput | undefined;
}
