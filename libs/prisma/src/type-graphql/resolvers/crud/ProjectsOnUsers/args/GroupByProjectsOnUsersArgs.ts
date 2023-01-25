import { ProjectsOnUsersScalarFieldEnum } from "../../../../enums/ProjectsOnUsersScalarFieldEnum";
import { ProjectsOnUsersOrderByWithAggregationInput } from "../../../inputs/ProjectsOnUsersOrderByWithAggregationInput";
import { ProjectsOnUsersScalarWhereWithAggregatesInput } from "../../../inputs/ProjectsOnUsersScalarWhereWithAggregatesInput";
import { ProjectsOnUsersWhereInput } from "../../../inputs/ProjectsOnUsersWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByProjectsOnUsersArgs {
  @Field(() => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  where?: ProjectsOnUsersWhereInput | undefined;

  @Field(() => [ProjectsOnUsersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProjectsOnUsersOrderByWithAggregationInput[] | undefined;

  @Field(() => [ProjectsOnUsersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"projectId" | "userId" | "assignedAt" | "assignedBy">;

  @Field(() => ProjectsOnUsersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectsOnUsersScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
