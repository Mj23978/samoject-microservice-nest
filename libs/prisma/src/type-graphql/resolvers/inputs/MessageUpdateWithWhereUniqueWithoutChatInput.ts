import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutChatInput } from "../inputs/MessageUpdateWithoutChatInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutChatInput", {
  isAbstract: true
})
export class MessageUpdateWithWhereUniqueWithoutChatInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutChatInput, {
    nullable: false
  })
  data!: MessageUpdateWithoutChatInput;
}
