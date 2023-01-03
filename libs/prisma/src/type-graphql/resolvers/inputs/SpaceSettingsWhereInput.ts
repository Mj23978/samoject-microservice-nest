import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SpaceRelationFilter } from "../inputs/SpaceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SpaceSettingsWhereInput", {
  isAbstract: true
})
export class SpaceSettingsWhereInput {
  @TypeGraphQL.Field(_type => [SpaceSettingsWhereInput], {
    nullable: true
  })
  AND?: SpaceSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceSettingsWhereInput], {
    nullable: true
  })
  OR?: SpaceSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceSettingsWhereInput], {
    nullable: true
  })
  NOT?: SpaceSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  localId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  spaceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SpaceRelationFilter, {
    nullable: true
  })
  space?: SpaceRelationFilter | undefined;
}
