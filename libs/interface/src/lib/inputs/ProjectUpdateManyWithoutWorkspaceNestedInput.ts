import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateManyWorkspaceInputEnvelope } from "../inputs/ProjectCreateManyWorkspaceInputEnvelope";
import { ProjectCreateOrConnectWithoutWorkspaceInput } from "../inputs/ProjectCreateOrConnectWithoutWorkspaceInput";
import { ProjectCreateWithoutWorkspaceInput } from "../inputs/ProjectCreateWithoutWorkspaceInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutWorkspaceInput } from "../inputs/ProjectUpdateManyWithWhereWithoutWorkspaceInput";
import { ProjectUpdateWithWhereUniqueWithoutWorkspaceInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutWorkspaceInput";
import { ProjectUpsertWithWhereUniqueWithoutWorkspaceInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpdateManyWithoutWorkspaceNestedInput", {
  isAbstract: true
})
export class ProjectUpdateManyWithoutWorkspaceNestedInput {
  @Field(() => [ProjectCreateWithoutWorkspaceInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutWorkspaceInput[] | undefined;

  @Field(() => [ProjectCreateOrConnectWithoutWorkspaceInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutWorkspaceInput[] | undefined;

  @Field(() => [ProjectUpsertWithWhereUniqueWithoutWorkspaceInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutWorkspaceInput[] | undefined;

  @Field(() => ProjectCreateManyWorkspaceInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyWorkspaceInputEnvelope | undefined;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectWhereUniqueInput[] | undefined;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectWhereUniqueInput[] | undefined;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectWhereUniqueInput[] | undefined;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;

  @Field(() => [ProjectUpdateWithWhereUniqueWithoutWorkspaceInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutWorkspaceInput[] | undefined;

  @Field(() => [ProjectUpdateManyWithWhereWithoutWorkspaceInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutWorkspaceInput[] | undefined;

  @Field(() => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
