import { Field, InputType } from "@nestjs/graphql";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyMutationInput } from "../inputs/ProjectUpdateManyMutationInput";

@InputType("ProjectUpdateManyWithWhereWithoutWorkspaceInput", {
  isAbstract: true
})
export class ProjectUpdateManyWithWhereWithoutWorkspaceInput {
  @Field(() => ProjectScalarWhereInput, {
    nullable: false
  })
  where!: ProjectScalarWhereInput;

  @Field(() => ProjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectUpdateManyMutationInput;
}
