import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateManyParentInputEnvelope } from "../inputs/MessageCreateManyParentInputEnvelope";
import { MessageCreateOrConnectWithoutParentInput } from "../inputs/MessageCreateOrConnectWithoutParentInput";
import { MessageCreateWithoutParentInput } from "../inputs/MessageCreateWithoutParentInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutParentInput } from "../inputs/MessageUpdateManyWithWhereWithoutParentInput";
import { MessageUpdateWithWhereUniqueWithoutParentInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutParentInput";
import { MessageUpsertWithWhereUniqueWithoutParentInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpdateManyWithoutParentNestedInput", {
  isAbstract: true
})
export class MessageUpdateManyWithoutParentNestedInput {
  @Field(() => [MessageCreateWithoutParentInput], {
    nullable: true
  })
  create?: MessageCreateWithoutParentInput[] | undefined;

  @Field(() => [MessageCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutParentInput[] | undefined;

  @Field(() => [MessageUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @Field(() => MessageCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyParentInputEnvelope | undefined;

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

  @Field(() => [MessageUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @Field(() => [MessageUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutParentInput[] | undefined;

  @Field(() => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
