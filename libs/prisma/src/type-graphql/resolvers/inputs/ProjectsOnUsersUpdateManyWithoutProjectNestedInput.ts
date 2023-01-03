import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateManyProjectInputEnvelope } from "../inputs/ProjectsOnUsersCreateManyProjectInputEnvelope";
import { ProjectsOnUsersCreateOrConnectWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateOrConnectWithoutProjectInput";
import { ProjectsOnUsersCreateWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateWithoutProjectInput";
import { ProjectsOnUsersScalarWhereInput } from "../inputs/ProjectsOnUsersScalarWhereInput";
import { ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput } from "../inputs/ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput";
import { ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput";
import { ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersUpdateManyWithoutProjectNestedInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateManyWithoutProjectNestedInput {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateWithoutProjectInput], {
    nullable: true
  })
  create?: ProjectsOnUsersCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsOnUsersCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectsOnUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectsOnUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectsOnUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsOnUsersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectsOnUsersScalarWhereInput[] | undefined;
}
