import * as TypeGraphQL from "type-graphql";

export enum ChatScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ChatScalarFieldEnum, {
  name: "ChatScalarFieldEnum",
  description: undefined,
});
