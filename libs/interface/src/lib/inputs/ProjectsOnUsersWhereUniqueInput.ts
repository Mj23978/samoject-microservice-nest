import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersProjectIdUserIdCompoundUniqueInput } from "../inputs/ProjectsOnUsersProjectIdUserIdCompoundUniqueInput";

@InputType("ProjectsOnUsersWhereUniqueInput", {
  isAbstract: true
})
export class ProjectsOnUsersWhereUniqueInput {
  @Field(() => ProjectsOnUsersProjectIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  projectId_userId?: ProjectsOnUsersProjectIdUserIdCompoundUniqueInput | undefined;
}
