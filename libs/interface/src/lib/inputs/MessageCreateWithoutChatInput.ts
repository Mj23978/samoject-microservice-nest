import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateNestedManyWithoutParentInput } from "../inputs/MessageCreateNestedManyWithoutParentInput";
import { MessageCreateNestedOneWithoutSubMessagesInput } from "../inputs/MessageCreateNestedOneWithoutSubMessagesInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";

@InputType("MessageCreateWithoutChatInput", {
  isAbstract: true
})
export class MessageCreateWithoutChatInput {
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

  @Field(() => MessageCreateNestedOneWithoutSubMessagesInput, {
    nullable: true
  })
  parent?: MessageCreateNestedOneWithoutSubMessagesInput | undefined;

  @Field(() => UserCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  sender?: UserCreateNestedOneWithoutCommentsInput | undefined;

  @Field(() => MessageCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  subMessages?: MessageCreateNestedManyWithoutParentInput | undefined;
}
