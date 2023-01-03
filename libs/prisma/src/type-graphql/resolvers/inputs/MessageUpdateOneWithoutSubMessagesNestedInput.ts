import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutSubMessagesInput } from "../inputs/MessageCreateOrConnectWithoutSubMessagesInput";
import { MessageCreateWithoutSubMessagesInput } from "../inputs/MessageCreateWithoutSubMessagesInput";
import { MessageUpdateWithoutSubMessagesInput } from "../inputs/MessageUpdateWithoutSubMessagesInput";
import { MessageUpsertWithoutSubMessagesInput } from "../inputs/MessageUpsertWithoutSubMessagesInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateOneWithoutSubMessagesNestedInput", {
  isAbstract: true
})
export class MessageUpdateOneWithoutSubMessagesNestedInput {
  @TypeGraphQL.Field(_type => MessageCreateWithoutSubMessagesInput, {
    nullable: true
  })
  create?: MessageCreateWithoutSubMessagesInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateOrConnectWithoutSubMessagesInput, {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSubMessagesInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpsertWithoutSubMessagesInput, {
    nullable: true
  })
  upsert?: MessageUpsertWithoutSubMessagesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true
  })
  connect?: MessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutSubMessagesInput, {
    nullable: true
  })
  update?: MessageUpdateWithoutSubMessagesInput | undefined;
}
