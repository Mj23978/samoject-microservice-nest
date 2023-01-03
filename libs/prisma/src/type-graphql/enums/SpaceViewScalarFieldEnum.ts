import * as TypeGraphQL from "type-graphql";

export enum SpaceViewScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  localId = "localId",
  spaceId = "spaceId"
}
TypeGraphQL.registerEnumType(SpaceViewScalarFieldEnum, {
  name: "SpaceViewScalarFieldEnum",
  description: undefined,
});
