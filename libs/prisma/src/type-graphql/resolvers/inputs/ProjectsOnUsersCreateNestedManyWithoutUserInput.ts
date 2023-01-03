import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateManyUserInputEnvelope } from "../inputs/ProjectsOnUsersCreateManyUserInputEnvelope";
import { ProjectsOnUsersCreateOrConnectWithoutUserInput } from "../inputs/ProjectsOnUsersCreateOrConnectWithoutUserInput";
import { ProjectsOnUsersCreateWithoutUserInput } from "../inputs/ProjectsOnUsersCreateWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@TypeGraphQL.InputType("ProjectsOnUsersCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectsOnUsersCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsOnUsersCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsOnUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsOnUsersCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsOnUsersWhereUniqueInput[] | undefined;
}
