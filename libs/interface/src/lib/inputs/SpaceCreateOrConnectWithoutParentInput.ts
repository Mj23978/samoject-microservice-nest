import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutParentInput } from "../inputs/SpaceCreateWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateOrConnectWithoutParentInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutParentInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceCreateWithoutParentInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutParentInput;
}
