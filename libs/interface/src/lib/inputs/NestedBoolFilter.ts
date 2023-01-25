import { Field, InputType } from "@nestjs/graphql";

@InputType("NestedBoolFilter", {
  isAbstract: true
})
export class NestedBoolFilter {
  @Field(() => Boolean, {
    nullable: true
  })
  equals?: boolean | undefined;

  @Field(() => NestedBoolFilter, {
    nullable: true
  })
  not?: NestedBoolFilter | undefined;
}
