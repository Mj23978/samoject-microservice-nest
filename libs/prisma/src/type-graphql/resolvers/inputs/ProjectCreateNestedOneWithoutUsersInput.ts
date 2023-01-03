import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutUsersInput } from "../inputs/ProjectCreateOrConnectWithoutUsersInput";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutUsersInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
