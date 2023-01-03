import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectSettingsCreateOrConnectWithoutProjectInput } from "../inputs/ProjectSettingsCreateOrConnectWithoutProjectInput";
import { ProjectSettingsCreateWithoutProjectInput } from "../inputs/ProjectSettingsCreateWithoutProjectInput";
import { ProjectSettingsWhereUniqueInput } from "../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectSettingsCreateNestedOneWithoutProjectInput", {
  isAbstract: true
})
export class ProjectSettingsCreateNestedOneWithoutProjectInput {
  @TypeGraphQL.Field(_type => ProjectSettingsCreateWithoutProjectInput, {
    nullable: true
  })
  create?: ProjectSettingsCreateWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: ProjectSettingsCreateOrConnectWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectSettingsWhereUniqueInput | undefined;
}
