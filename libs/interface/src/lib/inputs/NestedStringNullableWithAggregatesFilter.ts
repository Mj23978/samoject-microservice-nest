import { Field, InputType } from "@nestjs/graphql";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedStringNullableFilter } from "../inputs/NestedStringNullableFilter";

@InputType("NestedStringNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedStringNullableWithAggregatesFilter {
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

  @Field(() => NestedStringNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedStringNullableWithAggregatesFilter | undefined;

  @Field(() => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @Field(() => NestedStringNullableFilter, {
    nullable: true
  })
  _min?: NestedStringNullableFilter | undefined;

  @Field(() => NestedStringNullableFilter, {
    nullable: true
  })
  _max?: NestedStringNullableFilter | undefined;
}
