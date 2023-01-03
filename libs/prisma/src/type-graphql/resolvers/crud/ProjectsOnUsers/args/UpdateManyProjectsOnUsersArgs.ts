import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOnUsersUpdateManyMutationInput } from "../../../inputs/ProjectsOnUsersUpdateManyMutationInput";
import { ProjectsOnUsersWhereInput } from "../../../inputs/ProjectsOnUsersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectsOnUsersArgs {
  @TypeGraphQL.Field(_type => ProjectsOnUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  where?: ProjectsOnUsersWhereInput | undefined;
}
