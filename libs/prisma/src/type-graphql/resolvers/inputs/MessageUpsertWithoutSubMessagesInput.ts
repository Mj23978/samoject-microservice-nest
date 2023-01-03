import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutSubMessagesInput } from "../inputs/MessageCreateWithoutSubMessagesInput";
import { MessageUpdateWithoutSubMessagesInput } from "../inputs/MessageUpdateWithoutSubMessagesInput";

@TypeGraphQL.InputType("MessageUpsertWithoutSubMessagesInput", {
  isAbstract: true
})
export class MessageUpsertWithoutSubMessagesInput {
  @TypeGraphQL.Field(_type => MessageUpdateWithoutSubMessagesInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutSubMessagesInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutSubMessagesInput, {
    nullable: false
  })
  create!: MessageCreateWithoutSubMessagesInput;
}
