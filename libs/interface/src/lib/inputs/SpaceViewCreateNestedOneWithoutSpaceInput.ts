import { Field, InputType } from "@nestjs/graphql";
import { SpaceViewCreateOrConnectWithoutSpaceInput } from "../inputs/SpaceViewCreateOrConnectWithoutSpaceInput";
import { SpaceViewCreateWithoutSpaceInput } from "../inputs/SpaceViewCreateWithoutSpaceInput";
import { SpaceViewWhereUniqueInput } from "../inputs/SpaceViewWhereUniqueInput";

@InputType("SpaceViewCreateNestedOneWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceViewCreateNestedOneWithoutSpaceInput {
  @Field(() => SpaceViewCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: SpaceViewCreateWithoutSpaceInput | undefined;

  @Field(() => SpaceViewCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: SpaceViewCreateOrConnectWithoutSpaceInput | undefined;

  @Field(() => SpaceViewWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceViewWhereUniqueInput | undefined;
}
