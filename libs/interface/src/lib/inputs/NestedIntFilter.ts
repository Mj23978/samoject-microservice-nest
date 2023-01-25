import { Field, InputType, Int } from "@nestjs/graphql";

@InputType("NestedIntFilter", {
  isAbstract: true
})
export class NestedIntFilter {
  @Field(() => Int, {
    nullable: true
  })
  equals?: number | undefined;

  @Field(() => [Int], {
    nullable: true
  })
  in?: number[] | undefined;

  @Field(() => [Int], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @Field(() => Int, {
    nullable: true
  })
  lt?: number | undefined;

  @Field(() => Int, {
    nullable: true
  })
  lte?: number | undefined;

  @Field(() => Int, {
    nullable: true
  })
  gt?: number | undefined;

  @Field(() => Int, {
    nullable: true
  })
  gte?: number | undefined;

  @Field(() => NestedIntFilter, {
    nullable: true
  })
  not?: NestedIntFilter | undefined;
}
