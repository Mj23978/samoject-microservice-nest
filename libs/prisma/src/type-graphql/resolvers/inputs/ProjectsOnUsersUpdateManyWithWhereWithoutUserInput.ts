import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersScalarWhereInput } from "../inputs/ProjectsOnUsersScalarWhereInput";
import { ProjectsOnUsersUpdateManyMutationInput } from "../inputs/ProjectsOnUsersUpdateManyMutationInput";

@TypeGraphQL.InputType("ProjectsOnUsersUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectsOnUsersScalarWhereInput, {
    nullable: false
  })
  where!: ProjectsOnUsersScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectsOnUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectsOnUsersUpdateManyMutationInput;
}
