import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutSpaceInput } from "../inputs/ChatCreateWithoutSpaceInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateOrConnectWithoutSpaceInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutSpaceInput {
  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: ChatCreateWithoutSpaceInput;
}
