import { Field, InputType } from "@nestjs/graphql";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@InputType("NestedBoolWithAggregatesFilter", {
  isAbstract: true
})
export class NestedBoolWithAggregatesFilter {
  @Field(() => Boolean, {
    nullable: true
  })
  equals?: boolean | undefined;

  @Field(() => NestedBoolWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedBoolWithAggregatesFilter | undefined;

  @Field(() => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(() => NestedBoolFilter, {
    nullable: true
  })
  _min?: NestedBoolFilter | undefined;

  @Field(() => NestedBoolFilter, {
    nullable: true
  })
  _max?: NestedBoolFilter | undefined;
}
