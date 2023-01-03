import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutSpacesInput } from "../inputs/ProjectCreateOrConnectWithoutSpacesInput";
import { ProjectCreateWithoutSpacesInput } from "../inputs/ProjectCreateWithoutSpacesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutSpacesInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutSpacesInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutSpacesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutSpacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutSpacesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutSpacesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
