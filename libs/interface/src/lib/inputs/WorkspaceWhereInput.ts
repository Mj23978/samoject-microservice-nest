import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectListRelationFilter } from "../inputs/ProjectListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WorkspaceSettingsRelationFilter } from "../inputs/WorkspaceSettingsRelationFilter";

@InputType("WorkspaceWhereInput", {
  isAbstract: true
})
export class WorkspaceWhereInput {
  @Field(() => [WorkspaceWhereInput], {
    nullable: true
  })
  AND?: WorkspaceWhereInput[] | undefined;

  @Field(() => [WorkspaceWhereInput], {
    nullable: true
  })
  OR?: WorkspaceWhereInput[] | undefined;

  @Field(() => [WorkspaceWhereInput], {
    nullable: true
  })
  NOT?: WorkspaceWhereInput[] | undefined;

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
  title?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  settingsId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @Field(() => WorkspaceSettingsRelationFilter, {
    nullable: true
  })
  settings?: WorkspaceSettingsRelationFilter | undefined;

  @Field(() => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @Field(() => ProjectListRelationFilter, {
    nullable: true
  })
  projects?: ProjectListRelationFilter | undefined;
}
