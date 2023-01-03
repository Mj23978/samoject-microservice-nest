import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyChatInputEnvelope } from "../inputs/MessageCreateManyChatInputEnvelope";
import { MessageCreateOrConnectWithoutChatInput } from "../inputs/MessageCreateOrConnectWithoutChatInput";
import { MessageCreateWithoutChatInput } from "../inputs/MessageCreateWithoutChatInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutChatInput } from "../inputs/MessageUpdateManyWithWhereWithoutChatInput";
import { MessageUpdateWithWhereUniqueWithoutChatInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutChatInput";
import { MessageUpsertWithWhereUniqueWithoutChatInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateManyWithoutChatNestedInput", {
  isAbstract: true
})
export class MessageUpdateManyWithoutChatNestedInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutChatInput], {
    nullable: true
  })
  create?: MessageCreateWithoutChatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutChatInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutChatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutChatInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutChatInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyChatInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyChatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  set?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  delete?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutChatInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutChatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutChatInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutChatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
