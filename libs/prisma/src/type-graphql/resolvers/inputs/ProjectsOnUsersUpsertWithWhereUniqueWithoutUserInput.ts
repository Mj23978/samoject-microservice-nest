import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateWithoutUserInput } from "../inputs/ProjectsOnUsersCreateWithoutUserInput";
import { ProjectsOnUsersUpdateWithoutUserInput } from "../inputs/ProjectsOnUsersUpdateWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ProjectsOnUsersUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateWithoutUserInput;
}
