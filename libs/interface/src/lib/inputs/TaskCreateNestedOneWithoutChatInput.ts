import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateOrConnectWithoutChatInput } from "../inputs/TaskCreateOrConnectWithoutChatInput";
import { TaskCreateWithoutChatInput } from "../inputs/TaskCreateWithoutChatInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskCreateNestedOneWithoutChatInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutChatInput {
  @Field(() => TaskCreateWithoutChatInput, {
    nullable: true
  })
  create?: TaskCreateWithoutChatInput | undefined;

  @Field(() => TaskCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutChatInput | undefined;

  @Field(() => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
