import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateManySenderInputEnvelope } from "../inputs/MessageCreateManySenderInputEnvelope";
import { MessageCreateOrConnectWithoutSenderInput } from "../inputs/MessageCreateOrConnectWithoutSenderInput";
import { MessageCreateWithoutSenderInput } from "../inputs/MessageCreateWithoutSenderInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutSenderInput } from "../inputs/MessageUpdateManyWithWhereWithoutSenderInput";
import { MessageUpdateWithWhereUniqueWithoutSenderInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutSenderInput";
import { MessageUpsertWithWhereUniqueWithoutSenderInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpdateManyWithoutSenderNestedInput", {
  isAbstract: true
})
export class MessageUpdateManyWithoutSenderNestedInput {
  @Field(() => [MessageCreateWithoutSenderInput], {
    nullable: true
  })
  create?: MessageCreateWithoutSenderInput[] | undefined;

  @Field(() => [MessageCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSenderInput[] | undefined;

  @Field(() => [MessageUpsertWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput[] | undefined;

  @Field(() => MessageCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManySenderInputEnvelope | undefined;

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

  @Field(() => [MessageUpdateWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutSenderInput[] | undefined;

  @Field(() => [MessageUpdateManyWithWhereWithoutSenderInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutSenderInput[] | undefined;

  @Field(() => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
