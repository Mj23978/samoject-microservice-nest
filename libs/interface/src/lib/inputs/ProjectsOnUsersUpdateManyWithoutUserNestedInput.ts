import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateManyUserInputEnvelope } from "../inputs/ProjectsOnUsersCreateManyUserInputEnvelope";
import { ProjectsOnUsersCreateOrConnectWithoutUserInput } from "../inputs/ProjectsOnUsersCreateOrConnectWithoutUserInput";
import { ProjectsOnUsersCreateWithoutUserInput } from "../inputs/ProjectsOnUsersCreateWithoutUserInput";
import { ProjectsOnUsersScalarWhereInput } from "../inputs/ProjectsOnUsersScalarWhereInput";
import { ProjectsOnUsersUpdateManyWithWhereWithoutUserInput } from "../inputs/ProjectsOnUsersUpdateManyWithWhereWithoutUserInput";
import { ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput";
import { ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateManyWithoutUserNestedInput {
  @Field(() => [ProjectsOnUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectsOnUsersCreateWithoutUserInput[] | undefined;

  @Field(() => [ProjectsOnUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsOnUsersCreateOrConnectWithoutUserInput[] | undefined;

  @Field(() => [ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @Field(() => ProjectsOnUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsOnUsersCreateManyUserInputEnvelope | undefined;

  @Field(() => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectsOnUsersWhereUniqueInput[] | undefined;

  @Field(() => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectsOnUsersWhereUniqueInput[] | undefined;

  @Field(() => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectsOnUsersWhereUniqueInput[] | undefined;

  @Field(() => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsOnUsersWhereUniqueInput[] | undefined;

  @Field(() => [ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @Field(() => [ProjectsOnUsersUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ProjectsOnUsersUpdateManyWithWhereWithoutUserInput[] | undefined;

  @Field(() => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectsOnUsersScalarWhereInput[] | undefined;
}
