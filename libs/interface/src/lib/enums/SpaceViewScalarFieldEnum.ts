import { registerEnumType } from "@nestjs/graphql";

export enum SpaceViewScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  localId = "localId",
  spaceId = "spaceId"
}

registerEnumType(SpaceViewScalarFieldEnum, {
  name: "SpaceViewScalarFieldEnum",
  description: undefined,
});
