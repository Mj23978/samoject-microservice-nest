import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutUsersInput } from "../inputs/ProjectCreateOrConnectWithoutUsersInput";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectUpdateWithoutUsersInput } from "../inputs/ProjectUpdateWithoutUsersInput";
import { ProjectUpsertWithoutUsersInput } from "../inputs/ProjectUpsertWithoutUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneRequiredWithoutUsersNestedInput", {
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutUsersInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutUsersInput | undefined;
}
