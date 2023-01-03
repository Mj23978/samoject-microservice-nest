import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateManyUserInputEnvelope } from "../inputs/ProjectsOnUsersCreateManyUserInputEnvelope";
import { ProjectsOnUsersCreateOrConnectWithoutUserInput } from "../inputs/ProjectsOnUsersCreateOrConnectWithoutUserInput";
import { ProjectsOnUsersCreateWithoutUserInput } from "../inputs/ProjectsOnUsersCreateWithoutUserInput";
import { ProjectsOnUsersScalarWhereInput } from "../inputs/ProjectsOnUsersScalarWhereInput";
import { ProjectsOnUsersUpdateManyWithWhereWithoutUserInput } from "../inputs/ProjectsOnUsersUpdateManyWithWhereWithoutUserInput";
import { ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput";
import { ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class ProjectsOnUsersUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectsOnUsersCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsOnUsersCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsOnUsersCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ProjectsOnUsersUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectsOnUsersScalarWhereInput[] | undefined;
}
