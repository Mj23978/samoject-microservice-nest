import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersUpdateWithoutUserInput } from "../inputs/ProjectsOnUsersUpdateWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateWithoutUserInput;
}
