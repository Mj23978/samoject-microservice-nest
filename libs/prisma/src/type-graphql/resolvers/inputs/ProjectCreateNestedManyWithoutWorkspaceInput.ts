import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyWorkspaceInputEnvelope } from "../inputs/ProjectCreateManyWorkspaceInputEnvelope";
import { ProjectCreateOrConnectWithoutWorkspaceInput } from "../inputs/ProjectCreateOrConnectWithoutWorkspaceInput";
import { ProjectCreateWithoutWorkspaceInput } from "../inputs/ProjectCreateWithoutWorkspaceInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedManyWithoutWorkspaceInput", {
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutWorkspaceInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutWorkspaceInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutWorkspaceInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyWorkspaceInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyWorkspaceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
