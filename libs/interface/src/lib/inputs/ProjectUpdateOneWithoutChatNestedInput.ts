import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutChatInput } from "../inputs/ProjectCreateOrConnectWithoutChatInput";
import { ProjectCreateWithoutChatInput } from "../inputs/ProjectCreateWithoutChatInput";
import { ProjectUpdateWithoutChatInput } from "../inputs/ProjectUpdateWithoutChatInput";
import { ProjectUpsertWithoutChatInput } from "../inputs/ProjectUpsertWithoutChatInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpdateOneWithoutChatNestedInput", {
  isAbstract: true
})
export class ProjectUpdateOneWithoutChatNestedInput {
  @Field(() => ProjectCreateWithoutChatInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutChatInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutChatInput | undefined;

  @Field(() => ProjectUpsertWithoutChatInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutChatInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @Field(() => ProjectUpdateWithoutChatInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutChatInput | undefined;
}
