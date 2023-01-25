import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateOrConnectWithoutChatInput } from "../inputs/TaskCreateOrConnectWithoutChatInput";
import { TaskCreateWithoutChatInput } from "../inputs/TaskCreateWithoutChatInput";
import { TaskUpdateWithoutChatInput } from "../inputs/TaskUpdateWithoutChatInput";
import { TaskUpsertWithoutChatInput } from "../inputs/TaskUpsertWithoutChatInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@InputType("TaskUpdateOneWithoutChatNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneWithoutChatNestedInput {
  @Field(() => TaskCreateWithoutChatInput, {
    nullable: true
  })
  create?: TaskCreateWithoutChatInput | undefined;

  @Field(() => TaskCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutChatInput | undefined;

  @Field(() => TaskUpsertWithoutChatInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutChatInput | undefined;

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

  @Field(() => TaskUpdateWithoutChatInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutChatInput | undefined;
}
