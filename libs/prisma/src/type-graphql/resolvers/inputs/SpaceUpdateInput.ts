import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatUpdateOneWithoutSpaceNestedInput } from "../inputs/ChatUpdateOneWithoutSpaceNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutSpacesNestedInput } from "../inputs/ProjectUpdateOneRequiredWithoutSpacesNestedInput";
import { SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput } from "../inputs/SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput";
import { SpaceUpdateManyWithoutParentNestedInput } from "../inputs/SpaceUpdateManyWithoutParentNestedInput";
import { SpaceUpdateOneWithoutSubspacesNestedInput } from "../inputs/SpaceUpdateOneWithoutSubspacesNestedInput";
import { SpaceViewUpdateOneRequiredWithoutSpaceNestedInput } from "../inputs/SpaceViewUpdateOneRequiredWithoutSpaceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SpaceUpdateInput", {
  isAbstract: true
})
export class SpaceUpdateInput {
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
  spaceType?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ChatUpdateOneWithoutSpaceNestedInput, {
    nullable: true
  })
  chat?: ChatUpdateOneWithoutSpaceNestedInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpdateOneWithoutSubspacesNestedInput, {
    nullable: true
  })
  parent?: SpaceUpdateOneWithoutSubspacesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutSpacesNestedInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput, {
    nullable: true
  })
  settings?: SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput | undefined;

  @TypeGraphQL.Field(_type => SpaceViewUpdateOneRequiredWithoutSpaceNestedInput, {
    nullable: true
  })
  view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput | undefined;

  @TypeGraphQL.Field(_type => SpaceUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  subspaces?: SpaceUpdateManyWithoutParentNestedInput | undefined;
}
