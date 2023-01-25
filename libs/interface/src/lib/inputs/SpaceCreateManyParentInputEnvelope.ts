import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateManyParentInput } from "../inputs/SpaceCreateManyParentInput";

@InputType("SpaceCreateManyParentInputEnvelope", {
  isAbstract: true
})
export class SpaceCreateManyParentInputEnvelope {
  @Field(() => [SpaceCreateManyParentInput], {
    nullable: false
  })
  data!: SpaceCreateManyParentInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
