import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutSpacesInput } from "../inputs/ProjectCreateOrConnectWithoutSpacesInput";
import { ProjectCreateWithoutSpacesInput } from "../inputs/ProjectCreateWithoutSpacesInput";
import { ProjectUpdateWithoutSpacesInput } from "../inputs/ProjectUpdateWithoutSpacesInput";
import { ProjectUpsertWithoutSpacesInput } from "../inputs/ProjectUpsertWithoutSpacesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneRequiredWithoutSpacesNestedInput", {
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutSpacesNestedInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutSpacesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutSpacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutSpacesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutSpacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutSpacesInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutSpacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutSpacesInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutSpacesInput | undefined;
}
