import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutViewInput } from "../inputs/SpaceCreateWithoutViewInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateOrConnectWithoutViewInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutViewInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceCreateWithoutViewInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutViewInput;
}
