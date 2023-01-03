import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ProjectsOnUsersWhereInput", {
  isAbstract: true
})
export class ProjectsOnUsersWhereInput {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersWhereInput], {
    nullable: true
  })
  AND?: ProjectsOnUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersWhereInput], {
    nullable: true
  })
  OR?: ProjectsOnUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersWhereInput], {
    nullable: true
  })
  NOT?: ProjectsOnUsersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  assignedBy?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
