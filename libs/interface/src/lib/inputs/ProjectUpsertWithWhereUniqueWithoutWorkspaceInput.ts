import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutWorkspaceInput } from "../inputs/ProjectCreateWithoutWorkspaceInput";
import { ProjectUpdateWithoutWorkspaceInput } from "../inputs/ProjectUpdateWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpsertWithWhereUniqueWithoutWorkspaceInput", {
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutWorkspaceInput {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectUpdateWithoutWorkspaceInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutWorkspaceInput;

  @Field(() => ProjectCreateWithoutWorkspaceInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutWorkspaceInput;
}
