import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateNestedOneWithoutMessagesInput } from "../inputs/ChatCreateNestedOneWithoutMessagesInput";
import { MessageCreateNestedManyWithoutParentInput } from "../inputs/MessageCreateNestedManyWithoutParentInput";
import { MessageCreateNestedOneWithoutSubMessagesInput } from "../inputs/MessageCreateNestedOneWithoutSubMessagesInput";

@InputType("MessageCreateWithoutSenderInput", {
  isAbstract: true
})
export class MessageCreateWithoutSenderInput {
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

  @Field(() => String, {
    nullable: false
  })
  content!: string;

  @Field(() => String, {
    nullable: true
  })
  contentType?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  type?: string | undefined;

  @Field(() => ChatCreateNestedOneWithoutMessagesInput, {
    nullable: false
  })
  chat!: ChatCreateNestedOneWithoutMessagesInput;

  @Field(() => MessageCreateNestedOneWithoutSubMessagesInput, {
    nullable: true
  })
  parent?: MessageCreateNestedOneWithoutSubMessagesInput | undefined;

  @Field(() => MessageCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  subMessages?: MessageCreateNestedManyWithoutParentInput | undefined;
}
