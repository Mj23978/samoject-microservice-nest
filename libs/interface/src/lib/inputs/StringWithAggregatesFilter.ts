import { Field, InputType } from "@nestjs/graphql";
import { QueryMode } from "../enums/QueryMode";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";
import { NestedStringWithAggregatesFilter } from "../inputs/NestedStringWithAggregatesFilter";

@InputType("StringWithAggregatesFilter", {
  isAbstract: true
})
export class StringWithAggregatesFilter {
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

  @Field(() => QueryMode, {
    nullable: true
  })
  mode?: "default" | "insensitive" | undefined;

  @Field(() => NestedStringWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedStringWithAggregatesFilter | undefined;

  @Field(() => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(() => NestedStringFilter, {
    nullable: true
  })
  _min?: NestedStringFilter | undefined;

  @Field(() => NestedStringFilter, {
    nullable: true
  })
  _max?: NestedStringFilter | undefined;
}
