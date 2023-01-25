import { registerEnumType } from "@nestjs/graphql";

export enum ProjectSettingsScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  localId = "localId",
  projectId = "projectId"
}

registerEnumType(ProjectSettingsScalarFieldEnum, {
  name: "ProjectSettingsScalarFieldEnum",
  description: undefined,
});
