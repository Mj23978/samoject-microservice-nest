import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateManyChatInputEnvelope } from "../inputs/MessageCreateManyChatInputEnvelope";
import { MessageCreateOrConnectWithoutChatInput } from "../inputs/MessageCreateOrConnectWithoutChatInput";
import { MessageCreateWithoutChatInput } from "../inputs/MessageCreateWithoutChatInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutChatInput } from "../inputs/MessageUpdateManyWithWhereWithoutChatInput";
import { MessageUpdateWithWhereUniqueWithoutChatInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutChatInput";
import { MessageUpsertWithWhereUniqueWithoutChatInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpdateManyWithoutChatNestedInput", {
  isAbstract: true
})
export class MessageUpdateManyWithoutChatNestedInput {
  @Field(() => [MessageCreateWithoutChatInput], {
    nullable: true
  })
  create?: MessageCreateWithoutChatInput[] | undefined;

  @Field(() => [MessageCreateOrConnectWithoutChatInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutChatInput[] | undefined;

  @Field(() => [MessageUpsertWithWhereUniqueWithoutChatInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutChatInput[] | undefined;

  @Field(() => MessageCreateManyChatInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyChatInputEnvelope | undefined;

  @Field(() => [MessageWhereUniqueInput], {
    nullable: true
  })
  set?: MessageWhereUniqueInput[] | undefined;

  @Field(() => [MessageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MessageWhereUniqueInput[] | undefined;

  @Field(() => [MessageWhereUniqueInput], {
    nullable: true
  })
  delete?: MessageWhereUniqueInput[] | undefined;

  @Field(() => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;

  @Field(() => [MessageUpdateWithWhereUniqueWithoutChatInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutChatInput[] | undefined;

  @Field(() => [MessageUpdateManyWithWhereWithoutChatInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutChatInput[] | undefined;

  @Field(() => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
