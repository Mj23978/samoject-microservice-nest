import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutSettingsInput } from "../inputs/SpaceCreateWithoutSettingsInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateOrConnectWithoutSettingsInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutSettingsInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutSettingsInput;
}
