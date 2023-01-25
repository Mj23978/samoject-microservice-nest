import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateNestedManyWithoutChatInput } from "../inputs/MessageCreateNestedManyWithoutChatInput";
import { SpaceCreateNestedOneWithoutChatInput } from "../inputs/SpaceCreateNestedOneWithoutChatInput";
import { TaskCreateNestedOneWithoutChatInput } from "../inputs/TaskCreateNestedOneWithoutChatInput";
import { UserCreateNestedOneWithoutChatInput } from "../inputs/UserCreateNestedOneWithoutChatInput";

@InputType("ChatCreateWithoutProjectInput", {
  isAbstract: true
})
export class ChatCreateWithoutProjectInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(() => MessageCreateNestedManyWithoutChatInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutChatInput | undefined;

  @Field(() => SpaceCreateNestedOneWithoutChatInput, {
    nullable: true
  })
  Space?: SpaceCreateNestedOneWithoutChatInput | undefined;

  @Field(() => TaskCreateNestedOneWithoutChatInput, {
    nullable: true
  })
  Task?: TaskCreateNestedOneWithoutChatInput | undefined;

  @Field(() => UserCreateNestedOneWithoutChatInput, {
    nullable: true
  })
  User?: UserCreateNestedOneWithoutChatInput | undefined;
}
