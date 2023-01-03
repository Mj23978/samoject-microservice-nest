import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOnUsersCreateInput } from "../../../inputs/ProjectsOnUsersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProjectsOnUsersArgs {
  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateInput, {
    nullable: false
  })
  data!: ProjectsOnUsersCreateInput;
}
