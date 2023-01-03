import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SpaceSettingsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SpaceSettingsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SpaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SpaceSettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SpaceSettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SpaceSettingsScalarWhereWithAggregatesInput[] | undefined;

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
  spaceId?: StringWithAggregatesFilter | undefined;
}
