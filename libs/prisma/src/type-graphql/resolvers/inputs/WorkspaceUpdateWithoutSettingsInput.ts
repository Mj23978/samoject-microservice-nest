import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutWorkspaceNestedInput } from "../inputs/ProjectUpdateManyWithoutWorkspaceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutWorkspacesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutWorkspacesNestedInput";

@TypeGraphQL.InputType("WorkspaceUpdateWithoutSettingsInput", {
  isAbstract: true
})
export class WorkspaceUpdateWithoutSettingsInput {
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
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutWorkspacesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutWorkspaceNestedInput, {
    nullable: true
  })
  projects?: ProjectUpdateManyWithoutWorkspaceNestedInput | undefined;
}
