import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProjectsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProjectsNestedInput";

@TypeGraphQL.InputType("ProjectsOnUsersUpdateWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateWithoutProjectInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedBy?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProjectsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutProjectsNestedInput | undefined;
}
