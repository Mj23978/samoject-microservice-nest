import { Field, InputType } from "@nestjs/graphql";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
import { NestedDateTimeWithAggregatesFilter } from "../inputs/NestedDateTimeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@InputType("DateTimeWithAggregatesFilter", {
  isAbstract: true
})
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, {
    nullable: true
  })
  equals?: Date | undefined;

  @Field(() => [Date], {
    nullable: true
  })
  in?: Date[] | undefined;

  @Field(() => [Date], {
    nullable: true
  })
  notIn?: Date[] | undefined;

  @Field(() => Date, {
    nullable: true
  })
  lt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  lte?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  gt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  gte?: Date | undefined;

  @Field(() => NestedDateTimeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @Field(() => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(() => NestedDateTimeFilter, {
    nullable: true
  })
  _min?: NestedDateTimeFilter | undefined;

  @Field(() => NestedDateTimeFilter, {
    nullable: true
  })
  _max?: NestedDateTimeFilter | undefined;
}
