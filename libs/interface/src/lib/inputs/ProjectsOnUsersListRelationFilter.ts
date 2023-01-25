import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersWhereInput } from "../inputs/ProjectsOnUsersWhereInput";

@InputType("ProjectsOnUsersListRelationFilter", {
  isAbstract: true
})
export class ProjectsOnUsersListRelationFilter {
  @Field(() => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  every?: ProjectsOnUsersWhereInput | undefined;

  @Field(() => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  some?: ProjectsOnUsersWhereInput | undefined;

  @Field(() => ProjectsOnUsersWhereInput, {
    nullable: true
  })
  none?: ProjectsOnUsersWhereInput | undefined;
}
