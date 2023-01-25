import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@InputType("ProjectsOnUsersWhereInput", {
  isAbstract: true
})
export class ProjectsOnUsersWhereInput {
  @Field(() => [ProjectsOnUsersWhereInput], {
    nullable: true
  })
  AND?: ProjectsOnUsersWhereInput[] | undefined;

  @Field(() => [ProjectsOnUsersWhereInput], {
    nullable: true
  })
  OR?: ProjectsOnUsersWhereInput[] | undefined;

  @Field(() => [ProjectsOnUsersWhereInput], {
    nullable: true
  })
  NOT?: ProjectsOnUsersWhereInput[] | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  assignedBy?: StringFilter | undefined;

  @Field(() => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @Field(() => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
