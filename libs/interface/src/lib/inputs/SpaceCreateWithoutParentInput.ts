import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateNestedOneWithoutSpaceInput } from "../inputs/ChatCreateNestedOneWithoutSpaceInput";
import { ProjectCreateNestedOneWithoutSpacesInput } from "../inputs/ProjectCreateNestedOneWithoutSpacesInput";
import { SpaceCreateNestedManyWithoutParentInput } from "../inputs/SpaceCreateNestedManyWithoutParentInput";
import { SpaceSettingsCreateNestedOneWithoutSpaceInput } from "../inputs/SpaceSettingsCreateNestedOneWithoutSpaceInput";
import { SpaceViewCreateNestedOneWithoutSpaceInput } from "../inputs/SpaceViewCreateNestedOneWithoutSpaceInput";

@InputType("SpaceCreateWithoutParentInput", {
  isAbstract: true
})
export class SpaceCreateWithoutParentInput {
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
