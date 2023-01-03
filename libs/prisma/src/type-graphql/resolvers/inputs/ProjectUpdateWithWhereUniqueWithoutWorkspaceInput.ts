import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateWithoutWorkspaceInput } from "../inputs/ProjectUpdateWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateWithWhereUniqueWithoutWorkspaceInput", {
  isAbstract: true
})
export class ProjectUpdateWithWhereUniqueWithoutWorkspaceInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutWorkspaceInput, {
    nullable: false
  })
  data!: ProjectUpdateWithoutWorkspaceInput;
}
