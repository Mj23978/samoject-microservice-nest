import { registerEnumType } from "@nestjs/graphql";

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

registerEnumType(MessageScalarFieldEnum, {
  name: "MessageScalarFieldEnum",
  description: undefined,
});
