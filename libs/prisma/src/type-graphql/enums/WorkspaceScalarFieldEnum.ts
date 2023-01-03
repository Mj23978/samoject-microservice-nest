import * as TypeGraphQL from "type-graphql";

export enum WorkspaceScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  title = "title",
  settingsId = "settingsId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(WorkspaceScalarFieldEnum, {
  name: "WorkspaceScalarFieldEnum",
  description: undefined,
});
