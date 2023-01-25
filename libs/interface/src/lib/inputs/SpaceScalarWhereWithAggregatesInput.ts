import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("SpaceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SpaceScalarWhereWithAggregatesInput {
  @Field(() => [SpaceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SpaceScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [SpaceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SpaceScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [SpaceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SpaceScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  viewId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  settingsId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  spaceType?: StringWithAggregatesFilter | undefined;

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parentId?: StringNullableWithAggregatesFilter | undefined;

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  chatId?: StringNullableWithAggregatesFilter | undefined;
}
