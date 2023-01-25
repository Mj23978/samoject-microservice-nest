import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateOrConnectWithoutSettingsInput } from "../inputs/SpaceCreateOrConnectWithoutSettingsInput";
import { SpaceCreateWithoutSettingsInput } from "../inputs/SpaceCreateWithoutSettingsInput";
import { SpaceUpdateWithoutSettingsInput } from "../inputs/SpaceUpdateWithoutSettingsInput";
import { SpaceUpsertWithoutSettingsInput } from "../inputs/SpaceUpsertWithoutSettingsInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpdateOneWithoutSettingsNestedInput", {
  isAbstract: true
})
export class SpaceUpdateOneWithoutSettingsNestedInput {
  @Field(() => SpaceCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutSettingsInput | undefined;

  @Field(() => SpaceCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput | undefined;

  @Field(() => SpaceUpsertWithoutSettingsInput, {
    nullable: true
  })
  upsert?: SpaceUpsertWithoutSettingsInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;

  @Field(() => SpaceUpdateWithoutSettingsInput, {
    nullable: true
  })
  update?: SpaceUpdateWithoutSettingsInput | undefined;
}
