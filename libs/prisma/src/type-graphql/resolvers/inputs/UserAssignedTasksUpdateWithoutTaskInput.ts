import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAssignedTasksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAssignedTasksNestedInput";

@TypeGraphQL.InputType("UserAssignedTasksUpdateWithoutTaskInput", {
  isAbstract: true
})
export class UserAssignedTasksUpdateWithoutTaskInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedBy?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAssignedTasksNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput | undefined;
}
