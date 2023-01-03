import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatUpdateOneWithoutTaskNestedInput } from "../inputs/ChatUpdateOneWithoutTaskNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneWithoutTasksNestedInput } from "../inputs/ProjectUpdateOneWithoutTasksNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutParentNestedInput } from "../inputs/TaskUpdateManyWithoutParentNestedInput";
import { TaskUpdateOneWithoutSubTasksNestedInput } from "../inputs/TaskUpdateOneWithoutSubTasksNestedInput";
import { UserAssignedTasksUpdateManyWithoutTaskNestedInput } from "../inputs/UserAssignedTasksUpdateManyWithoutTaskNestedInput";
import { UserUpdateOneWithoutCreatedTasksNestedInput } from "../inputs/UserUpdateOneWithoutCreatedTasksNestedInput";

@TypeGraphQL.InputType("TaskUpdateInput", {
  isAbstract: true
})
export class TaskUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  details?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpdateOneWithoutTaskNestedInput, {
    nullable: true
  })
  chat?: ChatUpdateOneWithoutTaskNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCreatedTasksNestedInput, {
    nullable: true
  })
  creator?: UserUpdateOneWithoutCreatedTasksNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneWithoutSubTasksNestedInput, {
    nullable: true
  })
  parent?: TaskUpdateOneWithoutSubTasksNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneWithoutTasksNestedInput, {
    nullable: true
  })
  project?: ProjectUpdateOneWithoutTasksNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  subTasks?: TaskUpdateManyWithoutParentNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserAssignedTasksUpdateManyWithoutTaskNestedInput, {
    nullable: true
  })
  assignes?: UserAssignedTasksUpdateManyWithoutTaskNestedInput | undefined;
}
