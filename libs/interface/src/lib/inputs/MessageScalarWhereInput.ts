import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("MessageScalarWhereInput", {
  isAbstract: true
})
export class MessageScalarWhereInput {
  @Field(() => [MessageScalarWhereInput], {
    nullable: true
  })
  AND?: MessageScalarWhereInput[] | undefined;

  @Field(() => [MessageScalarWhereInput], {
    nullable: true
  })
  OR?: MessageScalarWhereInput[] | undefined;

  @Field(() => [MessageScalarWhereInput], {
    nullable: true
  })
  NOT?: MessageScalarWhereInput[] | undefined;

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
  content?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  contentType?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  senderId?: StringNullableFilter | undefined;

  @Field(() => StringNullableFilter, {
    nullable: true
  })
  parentId?: StringNullableFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  chatId?: StringFilter | undefined;
}
