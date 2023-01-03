import * as TypeGraphQL from "type-graphql";

export enum UserAssignedTasksScalarFieldEnum {
  taskId = "taskId",
  userId = "userId",
  assignedAt = "assignedAt",
  assignedBy = "assignedBy"
}
TypeGraphQL.registerEnumType(UserAssignedTasksScalarFieldEnum, {
  name: "UserAssignedTasksScalarFieldEnum",
  description: undefined,
});
