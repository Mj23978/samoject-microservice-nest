import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutChatInput } from "../inputs/MessageCreateWithoutChatInput";
import { MessageUpdateWithoutChatInput } from "../inputs/MessageUpdateWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutChatInput", {
  isAbstract: true
})
export class MessageUpsertWithWhereUniqueWithoutChatInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutChatInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutChatInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutChatInput, {
    nullable: false
  })
  create!: MessageCreateWithoutChatInput;
}
