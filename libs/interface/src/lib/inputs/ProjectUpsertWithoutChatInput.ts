import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutChatInput } from "../inputs/ProjectCreateWithoutChatInput";
import { ProjectUpdateWithoutChatInput } from "../inputs/ProjectUpdateWithoutChatInput";

@InputType("ProjectUpsertWithoutChatInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutChatInput {
  @Field(() => ProjectUpdateWithoutChatInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutChatInput;

  @Field(() => ProjectCreateWithoutChatInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutChatInput;
}
