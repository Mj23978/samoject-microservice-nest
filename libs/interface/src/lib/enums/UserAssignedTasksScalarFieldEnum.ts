import { registerEnumType } from "@nestjs/graphql";

export enum UserAssignedTasksScalarFieldEnum {
  taskId = "taskId",
  userId = "userId",
  assignedAt = "assignedAt",
  assignedBy = "assignedBy"
}

registerEnumType(UserAssignedTasksScalarFieldEnum, {
  name: "UserAssignedTasksScalarFieldEnum",
  description: undefined,
});
