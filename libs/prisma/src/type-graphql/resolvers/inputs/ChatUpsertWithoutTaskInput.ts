import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateWithoutTaskInput } from "../inputs/ChatCreateWithoutTaskInput";
import { ChatUpdateWithoutTaskInput } from "../inputs/ChatUpdateWithoutTaskInput";

@TypeGraphQL.InputType("ChatUpsertWithoutTaskInput", {
  isAbstract: true
})
export class ChatUpsertWithoutTaskInput {
  @TypeGraphQL.Field(_type => ChatUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: ChatUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => ChatCreateWithoutTaskInput, {
    nullable: false
  })
  create!: ChatCreateWithoutTaskInput;
}
