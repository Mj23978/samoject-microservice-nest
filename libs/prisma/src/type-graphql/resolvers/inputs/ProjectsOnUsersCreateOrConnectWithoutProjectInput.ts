import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsOnUsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectsOnUsersCreateWithoutProjectInput;
}
