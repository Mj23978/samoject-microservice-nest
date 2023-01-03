import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutProjectInput } from "../inputs/ChatCreateWithoutProjectInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ChatCreateWithoutProjectInput;
}
