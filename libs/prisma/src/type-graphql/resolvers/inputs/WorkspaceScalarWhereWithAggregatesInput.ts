import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("WorkspaceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WorkspaceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WorkspaceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WorkspaceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WorkspaceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WorkspaceScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  settingsId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
