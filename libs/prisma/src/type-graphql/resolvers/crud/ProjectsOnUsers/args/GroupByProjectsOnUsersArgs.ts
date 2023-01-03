import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOnUsersOrderByWithAggregationInput } from "../../../inputs/ProjectsOnUsersOrderByWithAggregationInput";
import { ProjectsOnUsersScalarWhereWithAggregatesInput } from "../../../inputs/ProjectsOnUsersScalarWhereWithAggregatesInput";
import { ProjectsOnUsersWhereInput } from "../../../inputs/ProjectsOnUsersWhereInput";
import { ProjectsOnUsersScalarFieldEnum } from "../../../../enums/ProjectsOnUsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectsOnUsersArgs {
  @TypeGraphQL.Field(_type => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  where?: ProjectsOnUsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProjectsOnUsersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"projectId" | "userId" | "assignedAt" | "assignedBy">;

  @TypeGraphQL.Field(_type => ProjectsOnUsersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectsOnUsersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
