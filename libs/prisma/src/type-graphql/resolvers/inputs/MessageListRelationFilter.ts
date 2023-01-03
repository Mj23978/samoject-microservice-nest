import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageWhereInput } from "../inputs/MessageWhereInput";

@TypeGraphQL.InputType("MessageListRelationFilter", {
  isAbstract: true
})
export class MessageListRelationFilter {
  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  every?: MessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  some?: MessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  none?: MessageWhereInput | undefined;
}
