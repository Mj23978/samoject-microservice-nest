import { Field, InputType } from "@nestjs/graphql";
import { ChatRelationFilter } from "../inputs/ChatRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { SpaceListRelationFilter } from "../inputs/SpaceListRelationFilter";
import { SpaceRelationFilter } from "../inputs/SpaceRelationFilter";
import { SpaceSettingsRelationFilter } from "../inputs/SpaceSettingsRelationFilter";
import { SpaceViewRelationFilter } from "../inputs/SpaceViewRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("SpaceWhereInput", {
  isAbstract: true
})
export class SpaceWhereInput {
  @Field(() => [SpaceWhereInput], {
    nullable: true
  })
  AND?: SpaceWhereInput[] | undefined;

  @Field(() => [SpaceWhereInput], {
    nullable: true
  })
  OR?: SpaceWhereInput[] | undefined;

  @Field(() => [SpaceWhereInput], {
    nullable: true
  })
  NOT?: SpaceWhereInput[] | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  viewId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  settingsId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  spaceType?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  parentId?: StringNullableFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  chatId?: StringNullableFilter | undefined;

  @Field(() => ChatRelationFilter, {
    nullable: true
  })
  chat?: ChatRelationFilter | undefined;

  @Field(() => SpaceRelationFilter, {
    nullable: true
  })
  parent?: SpaceRelationFilter | undefined;

  @Field(() => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @Field(() => SpaceSettingsRelationFilter, {
    nullable: true
  })
  settings?: SpaceSettingsRelationFilter | undefined;

  @Field(() => SpaceViewRelationFilter, {
    nullable: true
  })
  view?: SpaceViewRelationFilter | undefined;

  @Field(() => SpaceListRelationFilter, {
    nullable: true
  })
  subspaces?: SpaceListRelationFilter | undefined;
}
