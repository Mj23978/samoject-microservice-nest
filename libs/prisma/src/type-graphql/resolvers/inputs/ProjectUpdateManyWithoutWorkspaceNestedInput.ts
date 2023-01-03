import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyWorkspaceInputEnvelope } from "../inputs/ProjectCreateManyWorkspaceInputEnvelope";
import { ProjectCreateOrConnectWithoutWorkspaceInput } from "../inputs/ProjectCreateOrConnectWithoutWorkspaceInput";
import { ProjectCreateWithoutWorkspaceInput } from "../inputs/ProjectCreateWithoutWorkspaceInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutWorkspaceInput } from "../inputs/ProjectUpdateManyWithWhereWithoutWorkspaceInput";
import { ProjectUpdateWithWhereUniqueWithoutWorkspaceInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutWorkspaceInput";
import { ProjectUpsertWithWhereUniqueWithoutWorkspaceInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateManyWithoutWorkspaceNestedInput", {
  isAbstract: true
})
export class ProjectUpdateManyWithoutWorkspaceNestedInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutWorkspaceInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutWorkspaceInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutWorkspaceInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyWorkspaceInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyWorkspaceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutWorkspaceInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutWorkspaceInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
