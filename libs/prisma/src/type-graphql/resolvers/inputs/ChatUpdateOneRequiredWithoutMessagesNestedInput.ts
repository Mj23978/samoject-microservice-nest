import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutMessagesInput } from "../inputs/ChatCreateOrConnectWithoutMessagesInput";
import { ChatCreateWithoutMessagesInput } from "../inputs/ChatCreateWithoutMessagesInput";
import { ChatUpdateWithoutMessagesInput } from "../inputs/ChatUpdateWithoutMessagesInput";
import { ChatUpsertWithoutMessagesInput } from "../inputs/ChatUpsertWithoutMessagesInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatUpdateOneRequiredWithoutMessagesNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneRequiredWithoutMessagesNestedInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: ChatCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpsertWithoutMessagesInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpdateWithoutMessagesInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutMessagesInput | undefined;
}
