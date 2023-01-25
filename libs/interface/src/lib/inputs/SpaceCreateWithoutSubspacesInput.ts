import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateNestedOneWithoutSpaceInput } from "../inputs/ChatCreateNestedOneWithoutSpaceInput";
import { ProjectCreateNestedOneWithoutSpacesInput } from "../inputs/ProjectCreateNestedOneWithoutSpacesInput";
import { SpaceCreateNestedOneWithoutSubspacesInput } from "../inputs/SpaceCreateNestedOneWithoutSubspacesInput";
import { SpaceSettingsCreateNestedOneWithoutSpaceInput } from "../inputs/SpaceSettingsCreateNestedOneWithoutSpaceInput";
import { SpaceViewCreateNestedOneWithoutSpaceInput } from "../inputs/SpaceViewCreateNestedOneWithoutSpaceInput";

@InputType("SpaceCreateWithoutSubspacesInput", {
  isAbstract: true
})
export class SpaceCreateWithoutSubspacesInput {
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

  @Field(() => ChatCreateNestedOneWithoutSpaceInput, {
    nullable: true
  })
  chat?: ChatCreateNestedOneWithoutSpaceInput | undefined;

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
}
