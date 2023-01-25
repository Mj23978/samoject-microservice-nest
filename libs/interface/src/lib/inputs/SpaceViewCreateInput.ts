import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateNestedOneWithoutViewInput } from "../inputs/SpaceCreateNestedOneWithoutViewInput";

@InputType("SpaceViewCreateInput", {
  isAbstract: true
})
export class SpaceViewCreateInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  spaceId!: string;

  @Field(() => SpaceCreateNestedOneWithoutViewInput, {
    nullable: true
  })
  space?: SpaceCreateNestedOneWithoutViewInput | undefined;
}
