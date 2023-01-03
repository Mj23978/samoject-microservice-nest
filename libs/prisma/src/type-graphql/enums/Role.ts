import * as TypeGraphQL from "type-graphql";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
