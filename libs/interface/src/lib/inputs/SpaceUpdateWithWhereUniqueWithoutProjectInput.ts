import { Field, InputType } from "@nestjs/graphql";
import { SpaceUpdateWithoutProjectInput } from "../inputs/SpaceUpdateWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class SpaceUpdateWithWhereUniqueWithoutProjectInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: SpaceUpdateWithoutProjectInput;
}
