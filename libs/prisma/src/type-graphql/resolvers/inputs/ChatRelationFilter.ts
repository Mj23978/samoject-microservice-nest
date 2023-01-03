import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatWhereInput } from "../inputs/ChatWhereInput";

@TypeGraphQL.InputType("ChatRelationFilter", {
  isAbstract: true
})
export class ChatRelationFilter {
  @TypeGraphQL.Field(_type => ChatWhereInput, {
    nullable: true
  })
  is?: ChatWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatWhereInput, {
    nullable: true
  })
  isNot?: ChatWhereInput | undefined;
}
