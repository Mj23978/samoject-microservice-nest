import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManySenderInputEnvelope } from "../inputs/MessageCreateManySenderInputEnvelope";
import { MessageCreateOrConnectWithoutSenderInput } from "../inputs/MessageCreateOrConnectWithoutSenderInput";
import { MessageCreateWithoutSenderInput } from "../inputs/MessageCreateWithoutSenderInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutSenderInput } from "../inputs/MessageUpdateManyWithWhereWithoutSenderInput";
import { MessageUpdateWithWhereUniqueWithoutSenderInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutSenderInput";
import { MessageUpsertWithWhereUniqueWithoutSenderInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateManyWithoutSenderNestedInput", {
  isAbstract: true
})
export class MessageUpdateManyWithoutSenderNestedInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutSenderInput], {
    nullable: true
  })
  create?: MessageCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManySenderInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutSenderInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
