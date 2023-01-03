import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutUserInput } from "../inputs/ChatCreateWithoutUserInput";
import { ChatUpdateWithoutUserInput } from "../inputs/ChatUpdateWithoutUserInput";

@TypeGraphQL.InputType("ChatUpsertWithoutUserInput", {
  isAbstract: true
})
export class ChatUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutUserInput, {
    nullable: false
  })
  create!: ChatCreateWithoutUserInput;
}
