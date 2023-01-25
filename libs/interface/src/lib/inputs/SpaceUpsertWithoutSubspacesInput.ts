import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutSubspacesInput } from "../inputs/SpaceCreateWithoutSubspacesInput";
import { SpaceUpdateWithoutSubspacesInput } from "../inputs/SpaceUpdateWithoutSubspacesInput";

@InputType("SpaceUpsertWithoutSubspacesInput", {
  isAbstract: true
})
export class SpaceUpsertWithoutSubspacesInput {
  @Field(() => SpaceUpdateWithoutSubspacesInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutSubspacesInput;

  @Field(() => SpaceCreateWithoutSubspacesInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutSubspacesInput;
}
