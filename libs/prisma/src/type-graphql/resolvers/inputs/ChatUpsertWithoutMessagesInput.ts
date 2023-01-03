import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutMessagesInput } from "../inputs/ChatCreateWithoutMessagesInput";
import { ChatUpdateWithoutMessagesInput } from "../inputs/ChatUpdateWithoutMessagesInput";

@TypeGraphQL.InputType("ChatUpsertWithoutMessagesInput", {
  isAbstract: true
})
export class ChatUpsertWithoutMessagesInput {
  @TypeGraphQL.Field(_type => ChatUpdateWithoutMessagesInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutMessagesInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: ChatCreateWithoutMessagesInput;
}
