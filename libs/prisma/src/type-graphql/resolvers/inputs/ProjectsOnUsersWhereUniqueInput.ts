import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersProjectIdUserIdCompoundUniqueInput } from "../inputs/ProjectsOnUsersProjectIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersWhereUniqueInput", {
  isAbstract: true
})
export class ProjectsOnUsersWhereUniqueInput {
  @TypeGraphQL.Field(_type => ProjectsOnUsersProjectIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  projectId_userId?: ProjectsOnUsersProjectIdUserIdCompoundUniqueInput | undefined;
}
