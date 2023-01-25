import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateWithoutChatInput } from "../inputs/ProjectCreateWithoutChatInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateOrConnectWithoutChatInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutChatInput {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectCreateWithoutChatInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutChatInput;
}
