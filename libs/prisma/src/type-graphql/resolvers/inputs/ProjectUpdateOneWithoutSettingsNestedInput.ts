import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutSettingsInput } from "../inputs/ProjectCreateOrConnectWithoutSettingsInput";
import { ProjectCreateWithoutSettingsInput } from "../inputs/ProjectCreateWithoutSettingsInput";
import { ProjectUpdateWithoutSettingsInput } from "../inputs/ProjectUpdateWithoutSettingsInput";
import { ProjectUpsertWithoutSettingsInput } from "../inputs/ProjectUpsertWithoutSettingsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneWithoutSettingsNestedInput", {
  isAbstract: true
})
export class ProjectUpdateOneWithoutSettingsNestedInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutSettingsInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutSettingsInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutSettingsInput | undefined;
}
