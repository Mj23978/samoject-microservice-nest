import * as TypeGraphQL from "type-graphql";

export enum MessageScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  content = "content",
  contentType = "contentType",
  type = "type",
  senderId = "senderId",
  parentId = "parentId",
  chatId = "chatId"
}
TypeGraphQL.registerEnumType(MessageScalarFieldEnum, {
  name: "MessageScalarFieldEnum",
  description: undefined,
});
