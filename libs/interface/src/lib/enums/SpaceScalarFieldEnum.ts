import { registerEnumType } from "@nestjs/graphql";

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

registerEnumType(SpaceScalarFieldEnum, {
  name: "SpaceScalarFieldEnum",
  description: undefined,
});
