import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutMessagesInput } from "../inputs/ChatCreateWithoutMessagesInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateOrConnectWithoutMessagesInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutMessagesInput {
  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: ChatCreateWithoutMessagesInput;
}
