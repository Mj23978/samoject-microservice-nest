import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatUpdateOneWithoutProjectNestedInput } from "../inputs/ChatUpdateOneWithoutProjectNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput } from "../inputs/ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput";
import { SpaceUpdateManyWithoutProjectNestedInput } from "../inputs/SpaceUpdateManyWithoutProjectNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutProjectNestedInput } from "../inputs/TaskUpdateManyWithoutProjectNestedInput";
import { UserUpdateOneRequiredWithoutOwnedProjectsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutOwnedProjectsNestedInput";
import { WorkspaceUpdateOneRequiredWithoutProjectsNestedInput } from "../inputs/WorkspaceUpdateOneRequiredWithoutProjectsNestedInput";

@TypeGraphQL.InputType("ProjectUpdateWithoutUsersInput", {
  isAbstract: true
})
export class ProjectUpdateWithoutUsersInput {
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

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpdateOneWithoutProjectNestedInput, {
    nullable: true
  })
  chat?: ChatUpdateOneWithoutProjectNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutOwnedProjectsNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput, {
    nullable: true
  })
  settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceUpdateOneRequiredWithoutProjectsNestedInput, {
    nullable: true
  })
  workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpdateManyWithoutProjectNestedInput, {
    nullable: true
  })
  spaces?: SpaceUpdateManyWithoutProjectNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutProjectNestedInput, {
    nullable: true
  })
  tasks?: TaskUpdateManyWithoutProjectNestedInput | undefined;
}
