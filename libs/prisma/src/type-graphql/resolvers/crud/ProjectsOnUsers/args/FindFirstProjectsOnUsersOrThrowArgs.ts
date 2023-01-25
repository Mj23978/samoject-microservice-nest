import { ProjectsOnUsersScalarFieldEnum } from "../../../../enums/ProjectsOnUsersScalarFieldEnum";
import { ProjectsOnUsersOrderByWithRelationInput } from "../../../inputs/ProjectsOnUsersOrderByWithRelationInput";
import { ProjectsOnUsersWhereInput } from "../../../inputs/ProjectsOnUsersWhereInput";
import { ProjectsOnUsersWhereUniqueInput } from "../../../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstProjectsOnUsersOrThrowArgs {
  @Field(() => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  where?: ProjectsOnUsersWhereInput | undefined;

  @Field(() => [ProjectsOnUsersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProjectsOnUsersOrderByWithRelationInput[] | undefined;

  @Field(() => ProjectsOnUsersWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectsOnUsersWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(() => [ProjectsOnUsersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"projectId" | "userId" | "assignedAt" | "assignedBy"> | undefined;
}
