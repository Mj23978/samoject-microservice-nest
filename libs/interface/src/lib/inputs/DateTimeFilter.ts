import { Field, InputType } from "@nestjs/graphql";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";

@InputType("DateTimeFilter", {
  isAbstract: true
})
export class DateTimeFilter {
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

  @Field(() => NestedDateTimeFilter, {
    nullable: true
  })
  not?: NestedDateTimeFilter | undefined;
}
