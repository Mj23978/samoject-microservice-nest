import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("ProjectSettingsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProjectSettingsScalarWhereWithAggregatesInput {
  @Field(() => [ProjectSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProjectSettingsScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [ProjectSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProjectSettingsScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [ProjectSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProjectSettingsScalarWhereWithAggregatesInput[] | undefined;

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
  projectId?: StringWithAggregatesFilter | undefined;
}
