import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutWorkspaceInput } from "../inputs/ProjectCreateWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateOrConnectWithoutWorkspaceInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutWorkspaceInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutWorkspaceInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutWorkspaceInput;
}
