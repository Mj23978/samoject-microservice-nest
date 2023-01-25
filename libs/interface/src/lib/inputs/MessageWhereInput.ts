import { Field, InputType } from "@nestjs/graphql";
import { ChatRelationFilter } from "../inputs/ChatRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { MessageRelationFilter } from "../inputs/MessageRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@InputType("MessageWhereInput", {
  isAbstract: true
})
export class MessageWhereInput {
  @Field(() => [MessageWhereInput], {
    nullable: true
  })
  AND?: MessageWhereInput[] | undefined;

  @Field(() => [MessageWhereInput], {
    nullable: true
  })
  OR?: MessageWhereInput[] | undefined;

  @Field(() => [MessageWhereInput], {
    nullable: true
  })
  NOT?: MessageWhereInput[] | undefined;

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

  @Field(() => ChatRelationFilter, {
    nullable: true
  })
  chat?: ChatRelationFilter | undefined;

  @Field(() => MessageRelationFilter, {
    nullable: true
  })
  parent?: MessageRelationFilter | undefined;

  @Field(() => UserRelationFilter, {
    nullable: true
  })
  sender?: UserRelationFilter | undefined;

  @Field(() => MessageListRelationFilter, {
    nullable: true
  })
  subMessages?: MessageListRelationFilter | undefined;
}
