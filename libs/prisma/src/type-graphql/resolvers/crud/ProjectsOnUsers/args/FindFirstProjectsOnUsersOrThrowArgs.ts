import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOnUsersOrderByWithRelationInput } from "../../../inputs/ProjectsOnUsersOrderByWithRelationInput";
import { ProjectsOnUsersWhereInput } from "../../../inputs/ProjectsOnUsersWhereInput";
import { ProjectsOnUsersWhereUniqueInput } from "../../../inputs/ProjectsOnUsersWhereUniqueInput";
import { ProjectsOnUsersScalarFieldEnum } from "../../../../enums/ProjectsOnUsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProjectsOnUsersOrThrowArgs {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  where?: ProjectsOnUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProjectsOnUsersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectsOnUsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"projectId" | "userId" | "assignedAt" | "assignedBy"> | undefined;
}
