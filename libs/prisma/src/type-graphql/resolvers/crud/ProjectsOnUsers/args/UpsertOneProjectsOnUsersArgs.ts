import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOnUsersCreateInput } from "../../../inputs/ProjectsOnUsersCreateInput";
import { ProjectsOnUsersUpdateInput } from "../../../inputs/ProjectsOnUsersUpdateInput";
import { ProjectsOnUsersWhereUniqueInput } from "../../../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProjectsOnUsersArgs {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersUpdateInput, {
    nullable: false
  })
  update!: ProjectsOnUsersUpdateInput;
}
