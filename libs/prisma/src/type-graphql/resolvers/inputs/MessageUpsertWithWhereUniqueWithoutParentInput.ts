import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutParentInput } from "../inputs/MessageCreateWithoutParentInput";
import { MessageUpdateWithoutParentInput } from "../inputs/MessageUpdateWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class MessageUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutParentInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutParentInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutParentInput, {
    nullable: false
  })
  create!: MessageCreateWithoutParentInput;
}
