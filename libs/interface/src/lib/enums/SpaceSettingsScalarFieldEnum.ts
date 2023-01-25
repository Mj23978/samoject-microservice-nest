import { registerEnumType } from "@nestjs/graphql";

export enum SpaceSettingsScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  localId = "localId",
  spaceId = "spaceId"
}

registerEnumType(SpaceSettingsScalarFieldEnum, {
  name: "SpaceSettingsScalarFieldEnum",
  description: undefined,
});
