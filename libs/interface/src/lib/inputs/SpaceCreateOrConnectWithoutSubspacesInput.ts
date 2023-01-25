import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutSubspacesInput } from "../inputs/SpaceCreateWithoutSubspacesInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateOrConnectWithoutSubspacesInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutSubspacesInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceCreateWithoutSubspacesInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutSubspacesInput;
}
