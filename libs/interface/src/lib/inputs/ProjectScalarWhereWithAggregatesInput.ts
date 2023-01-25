import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("ProjectScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProjectScalarWhereWithAggregatesInput {
  @Field(() => [ProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProjectScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [ProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProjectScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [ProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProjectScalarWhereWithAggregatesInput[] | undefined;

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
  title?: StringWithAggregatesFilter | undefined;

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  settingsId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  workspaceId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  ownerId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  chatId?: StringNullableWithAggregatesFilter | undefined;
}
