import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ChatScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ChatScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ChatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ChatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ChatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ChatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
