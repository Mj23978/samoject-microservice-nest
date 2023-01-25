import { Field, InputType } from "@nestjs/graphql";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter";

@InputType("BoolFilter", {
  isAbstract: true
})
export class BoolFilter {
  @Field(() => Boolean, {
    nullable: true
  })
  equals?: boolean | undefined;

  @Field(() => NestedBoolFilter, {
    nullable: true
  })
  not?: NestedBoolFilter | undefined;
}
