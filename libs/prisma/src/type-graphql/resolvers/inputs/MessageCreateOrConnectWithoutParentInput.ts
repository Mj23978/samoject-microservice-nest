import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutParentInput } from "../inputs/MessageCreateWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutParentInput", {
  isAbstract: true
})
export class MessageCreateOrConnectWithoutParentInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutParentInput, {
    nullable: false
  })
  create!: MessageCreateWithoutParentInput;
}
