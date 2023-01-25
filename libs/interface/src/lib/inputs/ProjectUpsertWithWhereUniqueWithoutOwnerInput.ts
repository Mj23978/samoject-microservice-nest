import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutOwnerInput } from "../inputs/ProjectCreateWithoutOwnerInput";
import { ProjectUpdateWithoutOwnerInput } from "../inputs/ProjectUpdateWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutOwnerInput {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutOwnerInput;

  @Field(() => ProjectCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutOwnerInput;
}
