import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOnUsersWhereInput } from "../../../inputs/ProjectsOnUsersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectsOnUsersArgs {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  where?: ProjectsOnUsersWhereInput | undefined;
}
