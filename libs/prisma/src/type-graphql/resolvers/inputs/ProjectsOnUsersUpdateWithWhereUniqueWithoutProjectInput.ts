import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersUpdateWithoutProjectInput } from "../inputs/ProjectsOnUsersUpdateWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateWithoutProjectInput;
}
