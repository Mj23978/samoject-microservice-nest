import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateManyWorkspaceInputEnvelope } from "../inputs/ProjectCreateManyWorkspaceInputEnvelope";
import { ProjectCreateOrConnectWithoutWorkspaceInput } from "../inputs/ProjectCreateOrConnectWithoutWorkspaceInput";
import { ProjectCreateWithoutWorkspaceInput } from "../inputs/ProjectCreateWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateNestedManyWithoutWorkspaceInput", {
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutWorkspaceInput {
  @Field(() => [ProjectCreateWithoutWorkspaceInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutWorkspaceInput[] | undefined;

  @Field(() => [ProjectCreateOrConnectWithoutWorkspaceInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutWorkspaceInput[] | undefined;

  @Field(() => ProjectCreateManyWorkspaceInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyWorkspaceInputEnvelope | undefined;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
