import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WorkspaceRelationFilter } from "../inputs/WorkspaceRelationFilter";

@InputType("WorkspaceSettingsWhereInput", {
  isAbstract: true
})
export class WorkspaceSettingsWhereInput {
  @Field(() => [WorkspaceSettingsWhereInput], {
    nullable: true
  })
  AND?: WorkspaceSettingsWhereInput[] | undefined;

  @Field(() => [WorkspaceSettingsWhereInput], {
    nullable: true
  })
  OR?: WorkspaceSettingsWhereInput[] | undefined;

  @Field(() => [WorkspaceSettingsWhereInput], {
    nullable: true
  })
  NOT?: WorkspaceSettingsWhereInput[] | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  localId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  workspaceId?: StringFilter | undefined;

  @Field(() => WorkspaceRelationFilter, {
    nullable: true
  })
  workspace?: WorkspaceRelationFilter | undefined;
}
