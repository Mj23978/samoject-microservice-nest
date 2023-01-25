import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateNestedOneWithoutSpacesInput } from "../inputs/ProjectCreateNestedOneWithoutSpacesInput";
import { SpaceCreateNestedManyWithoutParentInput } from "../inputs/SpaceCreateNestedManyWithoutParentInput";
import { SpaceCreateNestedOneWithoutSubspacesInput } from "../inputs/SpaceCreateNestedOneWithoutSubspacesInput";
import { SpaceSettingsCreateNestedOneWithoutSpaceInput } from "../inputs/SpaceSettingsCreateNestedOneWithoutSpaceInput";
import { SpaceViewCreateNestedOneWithoutSpaceInput } from "../inputs/SpaceViewCreateNestedOneWithoutSpaceInput";

@InputType("SpaceCreateWithoutChatInput", {
  isAbstract: true
})
export class SpaceCreateWithoutChatInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  spaceType!: string;

  @Field(() => SpaceCreateNestedOneWithoutSubspacesInput, {
    nullable: true
  })
  parent?: SpaceCreateNestedOneWithoutSubspacesInput | undefined;

  @Field(() => ProjectCreateNestedOneWithoutSpacesInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutSpacesInput;

  @Field(() => SpaceSettingsCreateNestedOneWithoutSpaceInput, {
    nullable: false
  })
  settings!: SpaceSettingsCreateNestedOneWithoutSpaceInput;

  @Field(() => SpaceViewCreateNestedOneWithoutSpaceInput, {
    nullable: false
  })
  view!: SpaceViewCreateNestedOneWithoutSpaceInput;

  @Field(() => SpaceCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  subspaces?: SpaceCreateNestedManyWithoutParentInput | undefined;
}
