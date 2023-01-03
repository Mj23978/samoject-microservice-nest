import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutSenderInput } from "../inputs/MessageCreateWithoutSenderInput";
import { MessageUpdateWithoutSenderInput } from "../inputs/MessageUpdateWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutSenderInput", {
  isAbstract: true
})
export class MessageUpsertWithWhereUniqueWithoutSenderInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutSenderInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutSenderInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutSenderInput, {
    nullable: false
  })
  create!: MessageCreateWithoutSenderInput;
}
