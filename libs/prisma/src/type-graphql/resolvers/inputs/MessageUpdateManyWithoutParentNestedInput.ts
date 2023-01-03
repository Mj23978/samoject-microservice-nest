import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyParentInputEnvelope } from "../inputs/MessageCreateManyParentInputEnvelope";
import { MessageCreateOrConnectWithoutParentInput } from "../inputs/MessageCreateOrConnectWithoutParentInput";
import { MessageCreateWithoutParentInput } from "../inputs/MessageCreateWithoutParentInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutParentInput } from "../inputs/MessageUpdateManyWithWhereWithoutParentInput";
import { MessageUpdateWithWhereUniqueWithoutParentInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutParentInput";
import { MessageUpsertWithWhereUniqueWithoutParentInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateManyWithoutParentNestedInput", {
  isAbstract: true
})
export class MessageUpdateManyWithoutParentNestedInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutParentInput], {
    nullable: true
  })
  create?: MessageCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyParentInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
