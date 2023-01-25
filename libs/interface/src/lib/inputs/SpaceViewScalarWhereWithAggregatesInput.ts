import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("SpaceViewScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SpaceViewScalarWhereWithAggregatesInput {
  @Field(() => [SpaceViewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SpaceViewScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [SpaceViewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SpaceViewScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [SpaceViewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SpaceViewScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  localId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  spaceId?: StringWithAggregatesFilter | undefined;
}
