import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutViewInput } from "../inputs/SpaceCreateWithoutViewInput";
import { SpaceUpdateWithoutViewInput } from "../inputs/SpaceUpdateWithoutViewInput";

@InputType("SpaceUpsertWithoutViewInput", {
  isAbstract: true
})
export class SpaceUpsertWithoutViewInput {
  @Field(() => SpaceUpdateWithoutViewInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutViewInput;

  @Field(() => SpaceCreateWithoutViewInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutViewInput;
}
