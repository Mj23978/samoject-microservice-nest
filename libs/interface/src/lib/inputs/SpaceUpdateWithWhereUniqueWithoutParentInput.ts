import { Field, InputType } from "@nestjs/graphql";
import { SpaceUpdateWithoutParentInput } from "../inputs/SpaceUpdateWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpdateWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class SpaceUpdateWithWhereUniqueWithoutParentInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceUpdateWithoutParentInput, {
    nullable: false
  })
  data!: SpaceUpdateWithoutParentInput;
}
