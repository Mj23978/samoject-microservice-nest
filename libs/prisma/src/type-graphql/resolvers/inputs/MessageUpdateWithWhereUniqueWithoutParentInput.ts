import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutParentInput } from "../inputs/MessageUpdateWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class MessageUpdateWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutParentInput, {
    nullable: false
  })
  data!: MessageUpdateWithoutParentInput;
}
