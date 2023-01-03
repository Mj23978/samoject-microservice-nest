import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("WorkspaceSettingsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WorkspaceSettingsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WorkspaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WorkspaceSettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WorkspaceSettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WorkspaceSettingsScalarWhereWithAggregatesInput[] | undefined;

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
  localId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  workspaceId?: StringWithAggregatesFilter | undefined;
}
