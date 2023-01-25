import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutWorkspaceInput } from "../inputs/ProjectCreateWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateOrConnectWithoutWorkspaceInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutWorkspaceInput {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectCreateWithoutWorkspaceInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutWorkspaceInput;
}
