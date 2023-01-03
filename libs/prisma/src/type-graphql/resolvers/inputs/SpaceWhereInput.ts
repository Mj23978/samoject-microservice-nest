import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatRelationFilter } from "../inputs/ChatRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { SpaceListRelationFilter } from "../inputs/SpaceListRelationFilter";
import { SpaceRelationFilter } from "../inputs/SpaceRelationFilter";
import { SpaceSettingsRelationFilter } from "../inputs/SpaceSettingsRelationFilter";
import { SpaceViewRelationFilter } from "../inputs/SpaceViewRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SpaceWhereInput", {
  isAbstract: true
})
export class SpaceWhereInput {
  @TypeGraphQL.Field(_type => [SpaceWhereInput], {
    nullable: true
  })
  AND?: SpaceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceWhereInput], {
    nullable: true
  })
  OR?: SpaceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SpaceWhereInput], {
    nullable: true
  })
  NOT?: SpaceWhereInput[] | undefined;

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
  viewId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  settingsId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  spaceType?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parentId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  chatId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ChatRelationFilter, {
    nullable: true
  })
  chat?: ChatRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SpaceRelationFilter, {
    nullable: true
  })
  parent?: SpaceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsRelationFilter, {
    nullable: true
  })
  settings?: SpaceSettingsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SpaceViewRelationFilter, {
    nullable: true
  })
  view?: SpaceViewRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SpaceListRelationFilter, {
    nullable: true
  })
  subspaces?: SpaceListRelationFilter | undefined;
}
