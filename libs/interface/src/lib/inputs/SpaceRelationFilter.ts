import { Field, InputType } from "@nestjs/graphql";
import { SpaceWhereInput } from "../inputs/SpaceWhereInput";

@InputType("SpaceRelationFilter", {
  isAbstract: true
})
export class SpaceRelationFilter {
  @Field(() => SpaceWhereInput, {
    nullable: true
  })
  is?: SpaceWhereInput | undefined;

  @Field(() => SpaceWhereInput, {
    nullable: true
  })
  isNot?: SpaceWhereInput | undefined;
}
