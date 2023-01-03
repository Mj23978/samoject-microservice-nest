import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutSenderInput } from "../inputs/MessageCreateWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutSenderInput", {
  isAbstract: true
})
export class MessageCreateOrConnectWithoutSenderInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutSenderInput, {
    nullable: false
  })
  create!: MessageCreateWithoutSenderInput;
}
