import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutUserInput } from "../inputs/ChatCreateWithoutUserInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutUserInput, {
    nullable: false
  })
  create!: ChatCreateWithoutUserInput;
}
