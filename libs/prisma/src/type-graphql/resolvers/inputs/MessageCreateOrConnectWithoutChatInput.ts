import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutChatInput } from "../inputs/MessageCreateWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutChatInput", {
  isAbstract: true
})
export class MessageCreateOrConnectWithoutChatInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutChatInput, {
    nullable: false
  })
  create!: MessageCreateWithoutChatInput;
}
