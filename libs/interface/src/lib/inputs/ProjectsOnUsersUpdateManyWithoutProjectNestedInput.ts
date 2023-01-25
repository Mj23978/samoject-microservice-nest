import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateManyProjectInputEnvelope } from "../inputs/ProjectsOnUsersCreateManyProjectInputEnvelope";
import { ProjectsOnUsersCreateOrConnectWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateOrConnectWithoutProjectInput";
import { ProjectsOnUsersCreateWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateWithoutProjectInput";
import { ProjectsOnUsersScalarWhereInput } from "../inputs/ProjectsOnUsersScalarWhereInput";
import { ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput } from "../inputs/ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput";
import { ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput";
import { ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersUpdateManyWithoutProjectNestedInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateManyWithoutProjectNestedInput {
  @Field(() => [ProjectsOnUsersCreateWithoutProjectInput], {
    nullable: true
  })
  create?: ProjectsOnUsersCreateWithoutProjectInput[] | undefined;

  @Field(() => [ProjectsOnUsersCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsOnUsersCreateOrConnectWithoutProjectInput[] | undefined;

  @Field(() => [ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @Field(() => ProjectsOnUsersCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope | undefined;

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

  @Field(() => [ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @Field(() => [ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @Field(() => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectsOnUsersScalarWhereInput[] | undefined;
}
