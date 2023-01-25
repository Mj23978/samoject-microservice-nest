import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutParentInput } from "../inputs/SpaceCreateWithoutParentInput";
import { SpaceUpdateWithoutParentInput } from "../inputs/SpaceUpdateWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class SpaceUpsertWithWhereUniqueWithoutParentInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceUpdateWithoutParentInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutParentInput;

  @Field(() => SpaceCreateWithoutParentInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutParentInput;
}
