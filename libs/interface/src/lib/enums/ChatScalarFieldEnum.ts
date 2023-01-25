import { registerEnumType } from "@nestjs/graphql";

export enum ChatScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
registerEnumType(ChatScalarFieldEnum, {
  name: "ChatScalarFieldEnum",
  description: undefined,
});
