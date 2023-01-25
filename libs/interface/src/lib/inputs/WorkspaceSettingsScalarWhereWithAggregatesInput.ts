import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("WorkspaceSettingsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WorkspaceSettingsScalarWhereWithAggregatesInput {
  @Field(() => [WorkspaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WorkspaceSettingsScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [WorkspaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WorkspaceSettingsScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [WorkspaceSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WorkspaceSettingsScalarWhereWithAggregatesInput[] | undefined;

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
  workspaceId?: StringWithAggregatesFilter | undefined;
}
