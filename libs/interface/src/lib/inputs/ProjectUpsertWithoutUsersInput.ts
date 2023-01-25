import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectUpdateWithoutUsersInput } from "../inputs/ProjectUpdateWithoutUsersInput";

@InputType("ProjectUpsertWithoutUsersInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutUsersInput {
  @Field(() => ProjectUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutUsersInput;

  @Field(() => ProjectCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutUsersInput;
}
