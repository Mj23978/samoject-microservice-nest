import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateNestedOneWithoutSettingsInput } from "../inputs/SpaceCreateNestedOneWithoutSettingsInput";

@InputType("SpaceSettingsCreateInput", {
  isAbstract: true
})
export class SpaceSettingsCreateInput {
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
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  spaceId!: string;

  @Field(() => SpaceCreateNestedOneWithoutSettingsInput, {
    nullable: true
  })
  space?: SpaceCreateNestedOneWithoutSettingsInput | undefined;
}
