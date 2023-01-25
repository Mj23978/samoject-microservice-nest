import { Field, InputType } from "@nestjs/graphql";
import { SpaceViewCreateWithoutSpaceInput } from "../inputs/SpaceViewCreateWithoutSpaceInput";
import { SpaceViewUpdateWithoutSpaceInput } from "../inputs/SpaceViewUpdateWithoutSpaceInput";

@InputType("SpaceViewUpsertWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceViewUpsertWithoutSpaceInput {
  @Field(() => SpaceViewUpdateWithoutSpaceInput, {
    nullable: false
  })
  update!: SpaceViewUpdateWithoutSpaceInput;

  @Field(() => SpaceViewCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: SpaceViewCreateWithoutSpaceInput;
}
