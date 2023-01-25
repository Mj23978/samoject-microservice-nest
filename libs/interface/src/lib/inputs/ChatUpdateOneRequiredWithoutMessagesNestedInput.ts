import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutMessagesInput } from "../inputs/ChatCreateOrConnectWithoutMessagesInput";
import { ChatCreateWithoutMessagesInput } from "../inputs/ChatCreateWithoutMessagesInput";
import { ChatUpdateWithoutMessagesInput } from "../inputs/ChatUpdateWithoutMessagesInput";
import { ChatUpsertWithoutMessagesInput } from "../inputs/ChatUpsertWithoutMessagesInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatUpdateOneRequiredWithoutMessagesNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneRequiredWithoutMessagesNestedInput {
  @Field(() => ChatCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: ChatCreateWithoutMessagesInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput | undefined;

  @Field(() => ChatUpsertWithoutMessagesInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutMessagesInput | undefined;

  @Field(() => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;

  @Field(() => ChatUpdateWithoutMessagesInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutMessagesInput | undefined;
}
