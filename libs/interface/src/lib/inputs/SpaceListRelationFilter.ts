import { Field, InputType } from "@nestjs/graphql";
import { SpaceWhereInput } from "../inputs/SpaceWhereInput";

@InputType("SpaceListRelationFilter", {
  isAbstract: true
})
export class SpaceListRelationFilter {
  @Field(() => SpaceWhereInput, {
    nullable: true
  })
  every?: SpaceWhereInput | undefined;

  @Field(() => SpaceWhereInput, {
    nullable: true
  })
  some?: SpaceWhereInput | undefined;

  @Field(() => SpaceWhereInput, {
    nullable: true
  })
  none?: SpaceWhereInput | undefined;
}
