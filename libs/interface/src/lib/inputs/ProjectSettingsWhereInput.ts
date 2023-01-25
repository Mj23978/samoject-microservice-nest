import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("ProjectSettingsWhereInput", {
  isAbstract: true
})
export class ProjectSettingsWhereInput {
  @Field(() => [ProjectSettingsWhereInput], {
    nullable: true
  })
  AND?: ProjectSettingsWhereInput[] | undefined;

  @Field(() => [ProjectSettingsWhereInput], {
    nullable: true
  })
  OR?: ProjectSettingsWhereInput[] | undefined;

  @Field(() => [ProjectSettingsWhereInput], {
    nullable: true
  })
  NOT?: ProjectSettingsWhereInput[] | undefined;

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
  projectId?: StringFilter | undefined;

  @Field(() => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;
}
