import { Field, InputType } from "@nestjs/graphql";
import { SpaceViewCreateOrConnectWithoutSpaceInput } from "../inputs/SpaceViewCreateOrConnectWithoutSpaceInput";
import { SpaceViewCreateWithoutSpaceInput } from "../inputs/SpaceViewCreateWithoutSpaceInput";
import { SpaceViewUpdateWithoutSpaceInput } from "../inputs/SpaceViewUpdateWithoutSpaceInput";
import { SpaceViewUpsertWithoutSpaceInput } from "../inputs/SpaceViewUpsertWithoutSpaceInput";
import { SpaceViewWhereUniqueInput } from "../inputs/SpaceViewWhereUniqueInput";

@InputType("SpaceViewUpdateOneRequiredWithoutSpaceNestedInput", {
  isAbstract: true
})
export class SpaceViewUpdateOneRequiredWithoutSpaceNestedInput {
  @Field(() => SpaceViewCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: SpaceViewCreateWithoutSpaceInput | undefined;

  @Field(() => SpaceViewCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: SpaceViewCreateOrConnectWithoutSpaceInput | undefined;

  @Field(() => SpaceViewUpsertWithoutSpaceInput, {
    nullable: true
  })
  upsert?: SpaceViewUpsertWithoutSpaceInput | undefined;

  @Field(() => SpaceViewWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceViewWhereUniqueInput | undefined;

  @Field(() => SpaceViewUpdateWithoutSpaceInput, {
    nullable: true
  })
  update?: SpaceViewUpdateWithoutSpaceInput | undefined;
}
