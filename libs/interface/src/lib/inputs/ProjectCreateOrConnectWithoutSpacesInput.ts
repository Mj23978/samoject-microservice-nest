import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutSpacesInput } from "../inputs/ProjectCreateWithoutSpacesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateOrConnectWithoutSpacesInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutSpacesInput {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectCreateWithoutSpacesInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutSpacesInput;
}
