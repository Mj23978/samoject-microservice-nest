import * as TypeGraphQL from "type-graphql";

export enum ProjectSettingsScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  localId = "localId",
  projectId = "projectId"
}
TypeGraphQL.registerEnumType(ProjectSettingsScalarFieldEnum, {
  name: "ProjectSettingsScalarFieldEnum",
  description: undefined,
});
