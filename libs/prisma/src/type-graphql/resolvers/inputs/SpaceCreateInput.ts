import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateNestedOneWithoutSpaceInput } from "../inputs/ChatCreateNestedOneWithoutSpaceInput";
import { ProjectCreateNestedOneWithoutSpacesInput } from "../inputs/ProjectCreateNestedOneWithoutSpacesInput";
import { SpaceCreateNestedManyWithoutParentInput } from "../inputs/SpaceCreateNestedManyWithoutParentInput";
import { SpaceCreateNestedOneWithoutSubspacesInput } from "../inputs/SpaceCreateNestedOneWithoutSubspacesInput";
import { SpaceSettingsCreateNestedOneWithoutSpaceInput } from "../inputs/SpaceSettingsCreateNestedOneWithoutSpaceInput";
import { SpaceViewCreateNestedOneWithoutSpaceInput } from "../inputs/SpaceViewCreateNestedOneWithoutSpaceInput";

@TypeGraphQL.InputType("SpaceCreateInput", {
  isAbstract: true
})
export class SpaceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  spaceType!: string;

  @TypeGraphQL.Field(_type => ChatCreateNestedOneWithoutSpaceInput, {
    nullable: true
  })
  chat?: ChatCreateNestedOneWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateNestedOneWithoutSubspacesInput, {
    nullable: true
  })
  parent?: SpaceCreateNestedOneWithoutSubspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutSpacesInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutSpacesInput;

  @TypeGraphQL.Field(_type => SpaceSettingsCreateNestedOneWithoutSpaceInput, {
    nullable: false
  })
  settings!: SpaceSettingsCreateNestedOneWithoutSpaceInput;

  @TypeGraphQL.Field(_type => SpaceViewCreateNestedOneWithoutSpaceInput, {
    nullable: false
  })
  view!: SpaceViewCreateNestedOneWithoutSpaceInput;

  @TypeGraphQL.Field(_type => SpaceCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  subspaces?: SpaceCreateNestedManyWithoutParentInput | undefined;
}
