import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutSpaceInput } from "../inputs/ChatCreateWithoutSpaceInput";
import { ChatUpdateWithoutSpaceInput } from "../inputs/ChatUpdateWithoutSpaceInput";

@TypeGraphQL.InputType("ChatUpsertWithoutSpaceInput", {
  isAbstract: true
})
export class ChatUpsertWithoutSpaceInput {
  @TypeGraphQL.Field(_type => ChatUpdateWithoutSpaceInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutSpaceInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: ChatCreateWithoutSpaceInput;
}
