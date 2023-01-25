import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutOwnerInput } from "../inputs/ProjectCreateWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutOwnerInput {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutOwnerInput;
}
