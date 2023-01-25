import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("SpaceSettingsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SpaceSettingsScalarWhereWithAggregatesInput {
  @Field(() => [SpaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SpaceSettingsScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [SpaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SpaceSettingsScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [SpaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SpaceSettingsScalarWhereWithAggregatesInput[] | undefined;

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
