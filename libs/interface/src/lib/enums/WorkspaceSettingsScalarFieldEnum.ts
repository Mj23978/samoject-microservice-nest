import { registerEnumType } from "@nestjs/graphql";

export enum WorkspaceSettingsScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  localId = "localId",
  workspaceId = "workspaceId"
}

registerEnumType(WorkspaceSettingsScalarFieldEnum, {
  name: "WorkspaceSettingsScalarFieldEnum",
  description: undefined,
});
