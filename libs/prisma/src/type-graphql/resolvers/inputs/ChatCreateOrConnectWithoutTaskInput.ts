import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutTaskInput } from "../inputs/ChatCreateWithoutTaskInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateOrConnectWithoutTaskInput", {
  isAbstract: true
})
export class ChatCreateOrConnectWithoutTaskInput {
  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: false
  })
  where!: ChatWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutTaskInput, {
    nullable: false
  })
  create!: ChatCreateWithoutTaskInput;
}
