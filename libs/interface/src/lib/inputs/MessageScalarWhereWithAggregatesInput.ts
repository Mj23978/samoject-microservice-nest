import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("MessageScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MessageScalarWhereWithAggregatesInput {
  @Field(() => [MessageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MessageScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [MessageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MessageScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [MessageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MessageScalarWhereWithAggregatesInput[] | undefined;

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
  content?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  contentType?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  senderId?: StringNullableWithAggregatesFilter | undefined;

  @Field(() => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parentId?: StringNullableWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  chatId?: StringWithAggregatesFilter | undefined;
}
