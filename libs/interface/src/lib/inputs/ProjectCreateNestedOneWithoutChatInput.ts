import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutChatInput } from "../inputs/ProjectCreateOrConnectWithoutChatInput";
import { ProjectCreateWithoutChatInput } from "../inputs/ProjectCreateWithoutChatInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateNestedOneWithoutChatInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutChatInput {
  @Field(() => ProjectCreateWithoutChatInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutChatInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutChatInput | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
