import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("WorkspaceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WorkspaceScalarWhereWithAggregatesInput {
  @Field(() => [WorkspaceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WorkspaceScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [WorkspaceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WorkspaceScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [WorkspaceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WorkspaceScalarWhereWithAggregatesInput[] | undefined;

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
  title?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  settingsId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
