import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateOrConnectWithoutSubTasksInput } from "../inputs/TaskCreateOrConnectWithoutSubTasksInput";
import { TaskCreateWithoutSubTasksInput } from "../inputs/TaskCreateWithoutSubTasksInput";
import { TaskUpdateWithoutSubTasksInput } from "../inputs/TaskUpdateWithoutSubTasksInput";
import { TaskUpsertWithoutSubTasksInput } from "../inputs/TaskUpsertWithoutSubTasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpdateOneWithoutSubTasksNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneWithoutSubTasksNestedInput {
  @Field(() => TaskCreateWithoutSubTasksInput, {
    nullable: true
  })
  create?: TaskCreateWithoutSubTasksInput | undefined;

  @Field(() => TaskCreateOrConnectWithoutSubTasksInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput | undefined;

  @Field(() => TaskUpsertWithoutSubTasksInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutSubTasksInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @Field(() => TaskUpdateWithoutSubTasksInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutSubTasksInput | undefined;
}
