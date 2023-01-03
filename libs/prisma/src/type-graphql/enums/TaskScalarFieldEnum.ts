import * as TypeGraphQL from "type-graphql";

export enum TaskScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  projectId = "projectId",
  creatorId = "creatorId",
  parentId = "parentId",
  status = "status",
  details = "details",
  chatId = "chatId"
}
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
  name: "TaskScalarFieldEnum",
  description: undefined,
});
