import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutSettingsInput } from "../inputs/ProjectCreateOrConnectWithoutSettingsInput";
import { ProjectCreateWithoutSettingsInput } from "../inputs/ProjectCreateWithoutSettingsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutSettingsInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutSettingsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
