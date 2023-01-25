import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("TaskScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TaskScalarWhereWithAggregatesInput {
  @Field(() => [TaskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [TaskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [TaskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TaskScalarWhereWithAggregatesInput[] | undefined;

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

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringNullableWithAggregatesFilter | undefined;

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  creatorId?: StringNullableWithAggregatesFilter | undefined;

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parentId?: StringNullableWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  status?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  details?: StringWithAggregatesFilter | undefined;

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  chatId?: StringNullableWithAggregatesFilter | undefined;
}
