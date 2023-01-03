import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutSubMessagesInput } from "../inputs/MessageCreateOrConnectWithoutSubMessagesInput";
import { MessageCreateWithoutSubMessagesInput } from "../inputs/MessageCreateWithoutSubMessagesInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedOneWithoutSubMessagesInput", {
  isAbstract: true
})
export class MessageCreateNestedOneWithoutSubMessagesInput {
  @TypeGraphQL.Field(_type => MessageCreateWithoutSubMessagesInput, {
    nullable: true
  })
  create?: MessageCreateWithoutSubMessagesInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateOrConnectWithoutSubMessagesInput, {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSubMessagesInput | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true
  })
  connect?: MessageWhereUniqueInput | undefined;
}
