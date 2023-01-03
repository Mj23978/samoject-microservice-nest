import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOnUsersCreateManyInput } from "../../../inputs/ProjectsOnUsersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectsOnUsersArgs {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateManyInput], {
    nullable: false
  })
  data!: ProjectsOnUsersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
