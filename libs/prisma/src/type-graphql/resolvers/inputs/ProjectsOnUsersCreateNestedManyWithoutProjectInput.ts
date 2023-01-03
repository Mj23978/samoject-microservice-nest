import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateManyProjectInputEnvelope } from "../inputs/ProjectsOnUsersCreateManyProjectInputEnvelope";
import { ProjectsOnUsersCreateOrConnectWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateOrConnectWithoutProjectInput";
import { ProjectsOnUsersCreateWithoutProjectInput } from "../inputs/ProjectsOnUsersCreateWithoutProjectInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateWithoutProjectInput], {
    nullable: true
  })
  create?: ProjectsOnUsersCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsOnUsersCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsOnUsersWhereUniqueInput[] | undefined;
}
