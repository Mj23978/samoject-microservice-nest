import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateWithoutProjectInput";
import { ProjectsOnUsersUpdateWithoutProjectInput } from "../inputs/ProjectsOnUsersUpdateWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: ProjectsOnUsersUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateWithoutProjectInput;
}
