import { Field, InputType } from "@nestjs/graphql";
import { SpaceScalarWhereInput } from "../inputs/SpaceScalarWhereInput";
import { SpaceUpdateManyMutationInput } from "../inputs/SpaceUpdateManyMutationInput";

@InputType("SpaceUpdateManyWithWhereWithoutProjectInput", {
  isAbstract: true
})
export class SpaceUpdateManyWithWhereWithoutProjectInput {
  @Field(() => SpaceScalarWhereInput, {
    nullable: false
  })
  where!: SpaceScalarWhereInput;

  @Field(() => SpaceUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpaceUpdateManyMutationInput;
}
