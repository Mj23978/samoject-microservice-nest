import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutProjectInput } from "../inputs/SpaceCreateWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutProjectInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceCreateWithoutProjectInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutProjectInput;
}
