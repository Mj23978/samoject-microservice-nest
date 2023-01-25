import { Field, InputType } from "@nestjs/graphql";
import { SpaceViewCreateWithoutSpaceInput } from "../inputs/SpaceViewCreateWithoutSpaceInput";
import { SpaceViewWhereUniqueInput } from "../inputs/SpaceViewWhereUniqueInput";

@InputType("SpaceViewCreateOrConnectWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceViewCreateOrConnectWithoutSpaceInput {
  @Field(() => SpaceViewWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceViewWhereUniqueInput;

  @Field(() => SpaceViewCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: SpaceViewCreateWithoutSpaceInput;
}
