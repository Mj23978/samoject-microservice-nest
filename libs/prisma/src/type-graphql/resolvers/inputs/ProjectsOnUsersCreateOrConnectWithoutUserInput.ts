import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateWithoutUserInput } from "../inputs/ProjectsOnUsersCreateWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateWithoutUserInput;
}
