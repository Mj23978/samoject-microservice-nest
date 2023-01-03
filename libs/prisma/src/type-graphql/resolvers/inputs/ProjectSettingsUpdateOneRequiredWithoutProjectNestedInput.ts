import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectSettingsCreateOrConnectWithoutProjectInput } from "../inputs/ProjectSettingsCreateOrConnectWithoutProjectInput";
import { ProjectSettingsCreateWithoutProjectInput } from "../inputs/ProjectSettingsCreateWithoutProjectInput";
import { ProjectSettingsUpdateWithoutProjectInput } from "../inputs/ProjectSettingsUpdateWithoutProjectInput";
import { ProjectSettingsUpsertWithoutProjectInput } from "../inputs/ProjectSettingsUpsertWithoutProjectInput";
import { ProjectSettingsWhereUniqueInput } from "../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput", {
  isAbstract: true
})
export class ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput {
  @TypeGraphQL.Field(_type => ProjectSettingsCreateWithoutProjectInput, {
    nullable: true
  })
  create?: ProjectSettingsCreateWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: ProjectSettingsCreateOrConnectWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsUpsertWithoutProjectInput, {
    nullable: true
  })
  upsert?: ProjectSettingsUpsertWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsUpdateWithoutProjectInput, {
    nullable: true
  })
  update?: ProjectSettingsUpdateWithoutProjectInput | undefined;
}
