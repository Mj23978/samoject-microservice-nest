import { Field, InputType } from "@nestjs/graphql";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyMutationInput } from "../inputs/ProjectUpdateManyMutationInput";

@InputType("ProjectUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectUpdateManyWithWhereWithoutOwnerInput {
  @Field(() => ProjectScalarWhereInput, {
    nullable: false
  })
  where!: ProjectScalarWhereInput;

  @Field(() => ProjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectUpdateManyMutationInput;
}
