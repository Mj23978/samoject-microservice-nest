import { Field, InputType } from "@nestjs/graphql";

@InputType("NestedStringNullableFilter", {
  isAbstract: true
})
export class NestedStringNullableFilter {
  @Field(() => String, {
    nullable: true
  })
  equals?: string | undefined;

  @Field(() => [String], {
    nullable: true
  })
  in?: string[] | undefined;

  @Field(() => [String], {
    nullable: true
  })
  notIn?: string[] | undefined;

  @Field(() => String, {
    nullable: true
  })
  lt?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  lte?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  gt?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  gte?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  contains?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  startsWith?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  endsWith?: string | undefined;

  @Field(() => NestedStringNullableFilter, {
    nullable: true
  })
  not?: NestedStringNullableFilter | undefined;
}
