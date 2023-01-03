import * as TypeGraphQL from "type-graphql";

export enum SpaceScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  viewId = "viewId",
  projectId = "projectId",
  settingsId = "settingsId",
  spaceType = "spaceType",
  parentId = "parentId",
  chatId = "chatId"
}
TypeGraphQL.registerEnumType(SpaceScalarFieldEnum, {
  name: "SpaceScalarFieldEnum",
  description: undefined,
});
