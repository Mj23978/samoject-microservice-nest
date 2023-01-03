import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutProjectInput } from "../inputs/ChatCreateWithoutProjectInput";
import { ChatUpdateWithoutProjectInput } from "../inputs/ChatUpdateWithoutProjectInput";

@TypeGraphQL.InputType("ChatUpsertWithoutProjectInput", {
  isAbstract: true
})
export class ChatUpsertWithoutProjectInput {
  @TypeGraphQL.Field(_type => ChatUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ChatCreateWithoutProjectInput;
}
