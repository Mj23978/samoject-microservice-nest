import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateManyProjectInput } from "../inputs/SpaceCreateManyProjectInput";

@InputType("SpaceCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class SpaceCreateManyProjectInputEnvelope {
  @Field(() => [SpaceCreateManyProjectInput], {
    nullable: false
  })
  data!: SpaceCreateManyProjectInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
