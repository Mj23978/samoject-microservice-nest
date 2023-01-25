import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateOrConnectWithoutSettingsInput } from "../inputs/SpaceCreateOrConnectWithoutSettingsInput";
import { SpaceCreateWithoutSettingsInput } from "../inputs/SpaceCreateWithoutSettingsInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateNestedOneWithoutSettingsInput", {
  isAbstract: true
})
export class SpaceCreateNestedOneWithoutSettingsInput {
  @Field(() => SpaceCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutSettingsInput | undefined;

  @Field(() => SpaceCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput | undefined;

  @Field(() => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;
}
