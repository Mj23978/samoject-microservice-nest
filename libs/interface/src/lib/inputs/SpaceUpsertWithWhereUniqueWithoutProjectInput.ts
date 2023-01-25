import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutProjectInput } from "../inputs/SpaceCreateWithoutProjectInput";
import { SpaceUpdateWithoutProjectInput } from "../inputs/SpaceUpdateWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class SpaceUpsertWithWhereUniqueWithoutProjectInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutProjectInput;

  @Field(() => SpaceCreateWithoutProjectInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutProjectInput;
}
