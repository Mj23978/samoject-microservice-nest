import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOnUsersUpdateInput } from "../../../inputs/ProjectsOnUsersUpdateInput";
import { ProjectsOnUsersWhereUniqueInput } from "../../../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProjectsOnUsersArgs {
  @TypeGraphQL.Field(_type => ProjectsOnUsersUpdateInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;
}
