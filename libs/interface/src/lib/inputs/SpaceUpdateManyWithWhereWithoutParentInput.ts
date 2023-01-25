import { Field, InputType } from "@nestjs/graphql";
import { SpaceScalarWhereInput } from "../inputs/SpaceScalarWhereInput";
import { SpaceUpdateManyMutationInput } from "../inputs/SpaceUpdateManyMutationInput";

@InputType("SpaceUpdateManyWithWhereWithoutParentInput", {
  isAbstract: true
})
export class SpaceUpdateManyWithWhereWithoutParentInput {
  @Field(() => SpaceScalarWhereInput, {
    nullable: false
  })
  where!: SpaceScalarWhereInput;

  @Field(() => SpaceUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpaceUpdateManyMutationInput;
}
