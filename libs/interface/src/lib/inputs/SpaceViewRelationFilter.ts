import { Field, InputType } from "@nestjs/graphql";
import { SpaceViewWhereInput } from "../inputs/SpaceViewWhereInput";

@InputType("SpaceViewRelationFilter", {
  isAbstract: true
})
export class SpaceViewRelationFilter {
  @Field(() => SpaceViewWhereInput, {
    nullable: true
  })
  is?: SpaceViewWhereInput | undefined;

  @Field(() => SpaceViewWhereInput, {
    nullable: true
  })
  isNot?: SpaceViewWhereInput | undefined;
}
