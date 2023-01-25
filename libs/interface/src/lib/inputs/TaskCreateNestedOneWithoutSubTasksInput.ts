import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateOrConnectWithoutSubTasksInput } from "../inputs/TaskCreateOrConnectWithoutSubTasksInput";
import { TaskCreateWithoutSubTasksInput } from "../inputs/TaskCreateWithoutSubTasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskCreateNestedOneWithoutSubTasksInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutSubTasksInput {
  @Field(() => TaskCreateWithoutSubTasksInput, {
    nullable: true
  })
  create?: TaskCreateWithoutSubTasksInput | undefined;

  @Field(() => TaskCreateOrConnectWithoutSubTasksInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput | undefined;

  @Field(() => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
