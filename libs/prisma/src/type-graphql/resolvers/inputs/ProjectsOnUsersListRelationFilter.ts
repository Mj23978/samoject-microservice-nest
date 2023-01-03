import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersWhereInput } from "../inputs/ProjectsOnUsersWhereInput";

@TypeGraphQL.InputType("ProjectsOnUsersListRelationFilter", {
  isAbstract: true
})
export class ProjectsOnUsersListRelationFilter {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  every?: ProjectsOnUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  some?: ProjectsOnUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  none?: ProjectsOnUsersWhereInput | undefined;
}
