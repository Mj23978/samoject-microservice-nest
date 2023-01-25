import { Field, InputType } from "@nestjs/graphql";
import { ProjectUpdateWithoutWorkspaceInput } from "../inputs/ProjectUpdateWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpdateWithWhereUniqueWithoutWorkspaceInput", {
  isAbstract: true
})
export class ProjectUpdateWithWhereUniqueWithoutWorkspaceInput {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectUpdateWithoutWorkspaceInput, {
    nullable: false
  })
  data!: ProjectUpdateWithoutWorkspaceInput;
}
