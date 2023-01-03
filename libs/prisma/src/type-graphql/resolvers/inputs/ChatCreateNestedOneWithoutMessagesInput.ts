import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutMessagesInput } from "../inputs/ChatCreateOrConnectWithoutMessagesInput";
import { ChatCreateWithoutMessagesInput } from "../inputs/ChatCreateWithoutMessagesInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateNestedOneWithoutMessagesInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutMessagesInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: ChatCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
