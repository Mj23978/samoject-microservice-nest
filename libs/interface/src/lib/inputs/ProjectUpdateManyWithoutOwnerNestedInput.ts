import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateManyOwnerInputEnvelope } from "../inputs/ProjectCreateManyOwnerInputEnvelope";
import { ProjectCreateOrConnectWithoutOwnerInput } from "../inputs/ProjectCreateOrConnectWithoutOwnerInput";
import { ProjectCreateWithoutOwnerInput } from "../inputs/ProjectCreateWithoutOwnerInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutOwnerInput } from "../inputs/ProjectUpdateManyWithWhereWithoutOwnerInput";
import { ProjectUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutOwnerInput";
import { ProjectUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpdateManyWithoutOwnerNestedInput", {
  isAbstract: true
})
export class ProjectUpdateManyWithoutOwnerNestedInput {
  @Field(() => [ProjectCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutOwnerInput[] | undefined;

  @Field(() => [ProjectCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput[] | undefined;

  @Field(() => [ProjectUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @Field(() => ProjectCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyOwnerInputEnvelope | undefined;

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

  @Field(() => [ProjectUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @Field(() => [ProjectUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @Field(() => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
