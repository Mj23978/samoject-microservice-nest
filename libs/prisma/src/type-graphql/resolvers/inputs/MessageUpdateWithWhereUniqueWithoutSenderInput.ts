import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutSenderInput } from "../inputs/MessageUpdateWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutSenderInput", {
  isAbstract: true
})
export class MessageUpdateWithWhereUniqueWithoutSenderInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutSenderInput, {
    nullable: false
  })
  data!: MessageUpdateWithoutSenderInput;
}
