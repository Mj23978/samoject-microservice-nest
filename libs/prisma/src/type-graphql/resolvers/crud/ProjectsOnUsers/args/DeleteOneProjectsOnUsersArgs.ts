import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOnUsersWhereUniqueInput } from "../../../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProjectsOnUsersArgs {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;
}
