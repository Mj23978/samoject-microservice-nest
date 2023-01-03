import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutSubMessagesInput } from "../inputs/MessageCreateWithoutSubMessagesInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutSubMessagesInput", {
  isAbstract: true
})
export class MessageCreateOrConnectWithoutSubMessagesInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutSubMessagesInput, {
    nullable: false
  })
  create!: MessageCreateWithoutSubMessagesInput;
}
