import { Field, InputType } from "@nestjs/graphql";
import { ProjectUpdateWithoutOwnerInput } from "../inputs/ProjectUpdateWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectUpdateWithWhereUniqueWithoutOwnerInput {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: ProjectUpdateWithoutOwnerInput;
}
