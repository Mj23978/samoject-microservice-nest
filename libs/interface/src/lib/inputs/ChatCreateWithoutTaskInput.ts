import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateNestedManyWithoutChatInput } from "../inputs/MessageCreateNestedManyWithoutChatInput";
import { ProjectCreateNestedOneWithoutChatInput } from "../inputs/ProjectCreateNestedOneWithoutChatInput";
import { SpaceCreateNestedOneWithoutChatInput } from "../inputs/SpaceCreateNestedOneWithoutChatInput";
import { UserCreateNestedOneWithoutChatInput } from "../inputs/UserCreateNestedOneWithoutChatInput";

@InputType("ChatCreateWithoutTaskInput", {
  isAbstract: true
})
export class ChatCreateWithoutTaskInput {
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

  @Field(() => ProjectCreateNestedOneWithoutChatInput, {
    nullable: true
  })
  Project?: ProjectCreateNestedOneWithoutChatInput | undefined;

  @Field(() => SpaceCreateNestedOneWithoutChatInput, {
    nullable: true
  })
  Space?: SpaceCreateNestedOneWithoutChatInput | undefined;

  @Field(() => UserCreateNestedOneWithoutChatInput, {
    nullable: true
  })
  User?: UserCreateNestedOneWithoutChatInput | undefined;
}
