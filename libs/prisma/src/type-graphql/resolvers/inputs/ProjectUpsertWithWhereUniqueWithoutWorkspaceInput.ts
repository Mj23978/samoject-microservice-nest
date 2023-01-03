import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutWorkspaceInput } from "../inputs/ProjectCreateWithoutWorkspaceInput";
import { ProjectUpdateWithoutWorkspaceInput } from "../inputs/ProjectUpdateWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpsertWithWhereUniqueWithoutWorkspaceInput", {
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutWorkspaceInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutWorkspaceInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutWorkspaceInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutWorkspaceInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutWorkspaceInput;
}
